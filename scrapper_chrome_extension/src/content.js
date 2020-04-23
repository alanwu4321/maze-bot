import browser from '../vendor/browser-polyfill.js'
import _ from 'lodash'
import WindowBus from './bus.js'
import Selector from './selector.js'
import { insertElem } from './util.js'


const SOURCES = {
	styles: ['vendor/selectorgadget_combined.css', 'content.css'],
	sidebarIFrame: 'sidebar.html'
}

const iframeBus = new WindowBus()

let selectorGadget, sidebarIFrame

window.browser = browser
window.iframeBus = iframeBus


function disablePicker () {
	// TODO:low we might want to maintain sg instance and
	// just toggle it on and off instead of unsetting?

	if (!selectorGadget) return
	sidebarIFrame.classList.remove('ScrapeMate_picking')
	selectorGadget.unbindAndRemoveInterface()
	selectorGadget = null
	// on repeated initialization of SelectorGadget it doesn't unbind his events himself
	window.jQuerySG(document).add('*').unbind('.sg')
}

function enablePicker () {
	sidebarIFrame.classList.add('ScrapeMate_picking')
	selectorGadget = new SelectorGadget()
	selectorGadget.makeInterface()
	selectorGadget.clearEverything()
	selectorGadget.setMode('interactive')
	selectorGadget.sg_div[0].style = 'right: -9999px !important'
}

function onKeyUp (e) {
	if (selectorGadget) {
		// delegate to iframe
		e = _.pick(e, ['ctrlKey', 'shiftKey', 'altKey', 'metaKey', 'repeat', 'keyCode', 'key'])
		iframeBus.sendMessage('keyUp', e)
	}
}

function toggleJs () {
	tellRuntime('toggleJs')
}

function tellRuntime (method, arg) {
	return browser.runtime.sendMessage([method, arg])
}

function initUI (cb) {
	// setup event handlers
	window.addEventListener('keyup', onKeyUp)

	// start listening
	iframeBus.handlers = exposed
	iframeBus.listen()

	// inject sidebar
	let props = {id: 'ScrapeMate', src: browser.extension.getURL(SOURCES.sidebarIFrame)}
	sidebarIFrame = insertElem('iframe', props, document.body)
	sidebarIFrame.addEventListener('load', e => {
		// setup receiving side of the bus now
		iframeBus.setReceiver(sidebarIFrame.contentWindow)
	})
}

function toggleSelf () {
    if (document.querySelector('#ScrapeMate')) close()
	else initUI()
}

function close () {
	iframeBus.silence()
	iframeBus.unsetReceiver()
	window.removeEventListener('keyup', onKeyUp)
	disablePicker()
	document.body.removeChild(sidebarIFrame)
	tellRuntime('onClosed')
}

const exposed = {

	disablePicker: disablePicker,
	enablePicker: enablePicker,
	keyUp: onKeyUp,
	close: close,
	toggleJs: toggleJs,

	isJsDisabled () {
		// TODO:low also check if disabled natively (through developer tools or contentSetting)
		return tellRuntime('isJsDisabled')
	},

	togglePosition () {
		sidebarIFrame.classList.toggle('ScrapeMate_left')
	},

    changeSelectorPicked (selector) {
		// replaces selector currently generated by SelectorGadget

        if (!selectorGadget) return
        selectorGadget.path_output_field.value = selector
        selectorGadget.refreshFromPath()
    },

    checkSelectors (selectors, respond) {
        let data = {}
        selectors.forEach(sel => {
			if (!sel) {
				data[sel] = 0
			} else {
				let [type,elems] = Selector.select(sel)
				data[sel] = type ? elems.length : -1
			}
		})
		return data
	},

	saveText (text) {
		var el = document.createElement('a')
		el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
		let dt = new Date().toISOString().split('T')[0]
		el.setAttribute('download', `ScrapeMate.storage.${dt}.json`)
		el.style.display = 'none'
		document.body.appendChild(el)
		el.click()
		document.body.removeChild(el)
	},

	getLocation () {
		return location.href
	},

	loadStorage () {
		return browser.storage.sync.get()
	},

	removeStorageKeys (keys) {
		browser.storage.sync.remove(keys)
	},

	saveStorage (obj) {
		browser.storage.sync.set(obj)
	},

	getSelElemAttrs (selector) {
		// selector -> [{attr:val, attr:val...}, ...]

		let selected = Selector.select(selector)[1]

		let elems = []
		_.forEach(selected, el => {
			let targetEl = Selector.asElementNode(el)

			let attrs = {}

			// AttrNode or TextNode
			if (el !== targetEl) attrs['_val'] = el.value || el.data

			_.forEach(targetEl.attributes, attr => {
				attrs[attr.name] = attr.value
			})

			let ownText = Selector.xpath('text()', targetEl).map(el => el.data)

			attrs['_tag'] = targetEl.tagName.toLowerCase()
			if (targetEl.innerHTML) attrs['_html'] = el.innerHTML
			if (ownText.length) attrs['_text'] = ownText

			if (attrs['class'])
				attrs['class'] = attrs['class'].replace(/\s*(ScrapeMate_\S+|selectorgadget_\S+)\s*/g, '')
			if (!attrs['class'])
				delete attrs['class']

			elems.push(attrs)
		})

		return elems
	},

	highlight (selector) {
		this.unhighlight()
		_.forEach(Selector.select(selector)[1], el => {
			// TODO:low there should probably be an easier call that skips whole big css augmentation deal when we dont need it
			return Selector.asElementNode(el).classList.add('ScrapeMate_highlighted')
		})
    },

	unhighlight () {
		_.forEach(document.querySelectorAll('.ScrapeMate_highlighted'),
					el => el.classList.remove('ScrapeMate_highlighted'))
	}

}

function main () {
	// listen to the messages from background.js
	browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		let [method, argument] = request
		if (method === 'onClicked') {
			toggleSelf()
		}
		return false
	})

	// inject styles
	// browser.tabs.insertCSS are non inspectable so we do CSS this way instead
	// although it is possible for our styles to be killed by the underlying webpage
	SOURCES.styles.forEach(f => {
		let url = browser.extension.getURL(f)
		insertElem('link', {rel: 'stylesheet', href: url}, document.body)
	})

	// init ui
	toggleSelf()

	// patch SelectorGadget
	if (!SelectorGadget.prototype.highlightIframeOrig) {
		// try to avoid selecting our own iframe
		SelectorGadget.prototype.highlightIframeOrig = SelectorGadget.prototype.highlightIframe
		SelectorGadget.prototype.highlightIframe = function (elem, click) {
			if (elem[0] === sidebarIFrame) return
			return SelectorGadget.prototype.highlightIframeOrig.call(this, elem, click)
		}

		// hook into SelectorGadget selector update to send updates to our sidebar
		SelectorGadget.prototype.sgMousedownOrig = SelectorGadget.prototype.sgMousedown
		SelectorGadget.prototype.sgMousedown = function (e) {
			let ret = SelectorGadget.prototype.sgMousedownOrig.call(this, e)
			let sel = selectorGadget.path_output_field.value
			console.log("sgMousedown")
			console.log(sel)
			iframeBus.sendMessage('selectorPicked', sel)
			return ret
		}
	}
}

main()
