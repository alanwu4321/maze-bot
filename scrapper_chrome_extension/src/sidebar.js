import Vue from 'vue'
import MainComponent from './sidebar-main.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
window.vue = new Vue({
    el: '#main',
    render: h => h(MainComponent)
})


window.root = vue.$children[0]
