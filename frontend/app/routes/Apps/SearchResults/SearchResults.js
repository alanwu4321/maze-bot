import React from 'react';
import faker from 'faker/locale/en_US';
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import axios from 'axios';
import Jump from 'react-reveal/Jump';
import Tada from 'react-reveal/Tada';

import HorizontalLinearStepper from './Stepper'

import './animation.css';
import {
    Container,
    Row,
    Col,
    CardColumns,
    Nav,
    NavItem,
    NavLink,
    CustomInput,
    Button,
} from './../../../components';

import SkeletonLoader from "tiny-skeleton-loader-react";
import { HeaderMain } from "../../components/HeaderMain";
import { SearchResultsLeftNav } from
    "../../components/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from
    "../../components/SearchResults/SearchResultsHeader";
import { SearchResultsCard } from
    "../../components/SearchResults/SearchResultsCard";
import { ImagesResultsCard } from
    "../../components/SearchResults/ImagesResultsCard";
import { Paginations } from "../../components/Paginations";

import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import swal from 'sweetalert';

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

const serialize = (obj) => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

//capitalize only the first letter of the string. 
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const isStepOptional = (step) => {
    return [1, 2, 3, 4].includes(step);
};



const getStepBySupplier = (sup) => {
    switch (sup) {
        case "bestbuy":
            return 0
            break;
        case "amazon":
            return 1
            break;
        case "walmart":
            return 2
            break;
        case "staples":
            return 3
            break;
        case "source":
            return 4
            break;
        default:
            return 5
            break;
    }

}

export default class SearchResults extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            options: [],
            suppliers: [],
            selected_category: {},
            selected_supplier: { s_name: "bestbuy" },
            keyword: { kw: " ", size: 0, time: 0 },
            lockedDownProduct: null,
            matchingProducts: [],
            isProductLoading: false,
            activeStep: 0,
            skipped: new Set(),
            // selected_category: [],
            // layouts: _.clone(LAYOUT),
            // show_add_product: false
        };
        // this.headerCheckboxRef = React.createRef();
    }

    getSupplierByStep = (step) => {
        return this.state.suppliers[step]
    }

    isStepSkipped = (step) => {
        return this.state.skipped.has(step);
    };

    handleSkip = () => {
        let activeStep = this.state.activeStep
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        this.setActiveStep(activeStep + 1);
        const newSkipped = new Set(this.state.skipped.values());
        newSkipped.add(activeStep);
        this.setState({ selected_supplier: this.getSupplierByStep(activeStep + 1) })
        this.setSkipped(newSkipped);
    };

    handleNextStep = () => {
        let newSkipped = this.state.skipped
        let activeStep = this.state.activeStep
        if (this.isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        if (activeStep + 1 < this.state.suppliers.length) {
            this.setState({ selected_supplier: this.getSupplierByStep(activeStep + 1) })
        }
        this.setState({ activeStep: activeStep + 1 })
        this.setState({ skipped: newSkipped })
        this.setState({ products: [] })
    };

    setActiveStep = (_new) => {
        this.setState({ activeStep: _new })
    }

    setSkipped = (_new) => {
        this.setState({ skipped: _new })
    }

    onLockedDownProductDelete = () => {
        this.setState({ lockedDownProduct: null })
        this.setState({ matchingProduct: [] })
        this.setState({ products: [] })
        this.setState({ selected_supplier: this.getSupplierByStep(0) })
        this.setState({ skipped: new Set() })
        this.setActiveStep(0)
    }

    onProductDelete = (index) => {
        let oldArray = this.state.products
        oldArray.splice(index, 1);
        this.setState({ products: oldArray })
    }

    onLockDownProductAdd = (product, index) => {
        // swal("Hello world!  asd" + product.p_name)
        if (!this.state.lockedDownProduct) {
            // swal("Success", `Target Product Added`, "success", {
            //     button: false,
            //     timer: 1100,
            // }).then(e => {
            //create product and product suppler

            this.setState({ lockedDownProduct: product })
            let newMatchProducts = this.state.matchingProducts
            newMatchProducts.push(product)
            // })
            return null
        }
        let locProduct = this.state.lockedDownProduct
        for (let i = 0; i < product.suppliers.length; i++) {
            if (locProduct.suppliers.includes(product.suppliers[i])) {
                swal("Warning", `Duplicate Supplier ${capitalizeFirstLetter(product.suppliers[0].s_name)}`, "warning", {
                    button: false,
                    timer: 1100,
                });
                return
            }
        }
        // swal("Success", `Supplier ${capitalizeFirstLetter(product.suppliers[0])} Added`, "success", {
        //     button: false,
        //     timer: 1100,
        // });
        locProduct.suppliers.push(...product.suppliers)
        this.setState({ lockedDownProduct: locProduct })
        let newMatchProducts = this.state.matchingProducts
        newMatchProducts.push(product)
        this.setState({ matchingProduct: newMatchProducts })
    }

    fetchBestBuy = (input) => {
        let startTime = performance.now();
        fetch(process.env.API_URL + '/product/online?' + serialize({ kw: input, category: this.state.selected_category.id, supplier: "bestbuy", update: false }))
            .then(res => res.json())
            .then((products) => {
                console.log(products)
                let endTime = performance.now();
                let timeDiff = endTime - startTime; //in ms 
                // strip the ms 
                timeDiff /= 1000
                let supplier = this.state.suppliers[getStepBySupplier("bestbuy")]
                products.map(p => p.suppliers = [supplier])
                products.map(p => p.category = this.state.selected_category.name)
                this.handleFetchFinish(input, randomArrayShuffle(products), timeDiff)
            })
            .catch(console.log)
    }


    fetchScraper = (input, supplier) => {
        let startTime = performance.now();
        fetch(process.env.API_URL + '/product/online?' + serialize({ kw: input, category: this.state.selected_category.id, supplier: supplier, update: "false" }))
            .then(res => res.json())
            .then((data) => {
                let endTime = performance.now();
                let timeDiff = endTime - startTime; //in ms 
                // strip the ms 
                timeDiff /= 1000
                console.log(data)
                let products = data.response[0][supplier][0]
                products = Object.values(products)[0]
                supplier = this.state.suppliers[getStepBySupplier(supplier)]
                products.map(p => p.suppliers = [supplier])
                this.handleFetchFinish(input, randomArrayShuffle(products), timeDiff)
            })
            .catch(console.log)
    }

    handleFetchFinish = (input, products, timeDiff) => {
        this.setState({ products: products, keyword: { kw: input, size: products.length, time: timeDiff.toFixed(2) } })
        this.setState({ isProductLoading: false })
    }

    handleOnSearch = (input) => {
        this.setState({ isProductLoading: true })
        let { selected_supplier } = this.state
        switch (selected_supplier.s_name) {
            case 'bestbuy':
                this.fetchBestBuy(input)
                break;
            default:
                this.fetchScraper(input, selected_supplier.s_name)
                break;
        }
    }

    fetchSupplier = () => {
        fetch(process.env.API_URL + '/supplier')
            .then(res => res.json())
            .then((data) => {
                this.setState({ suppliers: data })
            })
            .catch(console.log)
    }

    fetchDefaultProducts = () => {
        fetch(process.env.API_URL + '/product')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                let supplier = this.state.suppliers[getStepBySupplier("bestbuy")]
                data.map(p => p.suppliers = [supplier])
                
                this.setState({ products: randomArrayShuffle(data) })
                this.setState({ isProductLoading: false })
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.fetchSupplier()
        // this.fetchDefaultProducts()
        fetch(`https://api.bestbuy.com/v1/categories(id=abcat*)?apiKey=tda21Z9pyCFomCJM211gkCrY&pageSize=100&page=1&show=id,name&format=json`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ options: data.categories })
                const curPage = 1
                for (let id = 1; id < data.totalPages; id++) {
                    console.log(curPage + id)
                    fetch(`https://api.bestbuy.com/v1/categories(id=abcat*)?apiKey=tda21Z9pyCFomCJM211gkCrY&pageSize=100&page=${curPage + id}&show=id,name&format=json`)
                        .then(res => res.json())
                        .then((data) => {
                            let newOption = this.state.options
                            newOption.push(...data.categories)
                            this.setState({ options: newOption })
                        })
                        .catch(console.log)
                }
            })
            .catch(console.log)
    }


    setSelected = (e) => {
        if (e.length > 0) {
            this.setState({ selected_category: e[0] })
        } else {
            this.setState({ selected_category: {} })
        }
    }

    basicExample = () => {
        // const [selected_category, setSelected] = useState([]);
        return (
            <Typeahead
                id="basic-typeahead-example"
                labelKey="name"
                onChange={this.setSelected}
                labelKey={(option) => `${option.name}`}
                options={this.state.options}
                placeholder="Choose a Category"
                multiple={true}
            />
        );
    };

    supplierOnClick = (e) => {
        this.setState({ selected_supplier: e.s_name })
        this.setActiveStep(getStepBySupplier(e.s_name))
    }

    handleNavOnSubmit = () => {
        const form = new FormData()
        const payload = this.state.lockedDownProduct
        for (var key in payload) {
            form.set(key, payload[key]);
        }
        swal("Warning", `Do you want to proceed adding this product?`, "warning",
            {
                buttons: {
                    cancel: {
                        text: "Cancel",
                        value: false,
                        visible: true,
                        closeModal: true,
                    },
                    confirm: {
                        text: "OK",
                        value: true,
                        visible: true,
                        closeModal: false
                    }
                },
            }).then(e => {
                if (!e) return null
                axios.post(process.env.API_URL + '/product/', form, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then(res => {
                    console.log(res)
                    const new_p_id = res.data[0].p_id
                    this.handleCreateProductSupplierMap(new_p_id)
                    this.handleCreateProductSupplier(new_p_id)
                    // this.props.history.push('/product/all')
                    swal("Success", `Product Added`, "success", {
                        button: false,
                        timer: 1300,
                    }).then(e=>{
                        window.location.href = '/product/all';
                    })
                }).catch(err => {
                    if (err) {
                        swal("Oh noes!", "The request failed!", "error");
                        this.setActiveStep(0)
                    } else {
                        swal.stopLoading();
                        swal.close();
                    }
                })
            })
    }


    handleCreateProductSupplierMap = (p_id) => {
        let matchingProducts = this.state.matchingProducts
        matchingProducts.forEach(match_product => {
            const form = new FormData()
            const s_id = match_product.suppliers[0].s_id
            match_product.category = this.state.selected_category
            form.set("s_id", s_id)
            form.set("p_id", p_id)
            for (var key in match_product) {
                form.set(key, match_product[key]);
            }
            axios.post(process.env.API_URL + '/product/supplier/map/', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(res => {
                console.log(res)
            }).catch(err => {
                if (err) {
                    swal("Oh noes!", "The request failed!", "error");
                    // this.setActiveStep(0)
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            })
        })
    }

    handleCreateProductSupplier = (p_id) => {
        let matchingProducts = this.state.matchingProducts
        matchingProducts.forEach(match_product => {
            const form = new FormData()
            const s_id = match_product.suppliers[0].s_id
            match_product.category = this.state.selected_category
            form.set("s_id", s_id)
            form.set("p_id", p_id)
            form.set("date", "NOW")
            for (var key in match_product) {
                form.set(key, match_product[key]);
            }
            axios.post(process.env.API_URL + '/product/supplier/', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(res => {
                console.log(res)
            }).catch(err => {
                if (err) {
                    console.log(err)
                    swal("Oh noes!", "The request failed!", "error");
                    // this.setActiveStep(0)
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            })
        })

    }

    handleCreateTargetProduct = () => {
        const { lockedDownProduct } = this.state
        if (!lockedDownProduct) {
            swal("Oh noes!", "Please add a product first", "error");
            return null
        }
        this.handleNextStep()
    }

    renderButtonSwitch = () => {
        const { activeStep, lockedDownProduct, suppliers } = this.state
        switch (activeStep) {
            case 0:
                return (
                    (lockedDownProduct) ?
                        <Pulse>
                            <Button color="primary" block onClick={this.handleCreateTargetProduct}>
                                Create
                        </Button>
                        </Pulse>
                        :
                        <Button color="secondary" disabled={true} block onClick={this.handleCreateTargetProduct}>
                            Add a Product First
                        </Button>
                )
                break;
            case suppliers.length:
                return (
                    <Jump>
                        <Button color="primary" block onClick={this.handleNavOnSubmit}>
                            Finish
                        </Button>
                    </Jump>
                )
            default:
                return (<Button color="primary" block onClick={this.handleNextStep}>
                    Next
                </Button>
                )
                break;
        }
    }

    leftNavBar = () => {
        const { lockedDownProduct, activeStep } = this.state
        return (
            <div>
                <Nav vertical pills className="mb-3">
                    <NavItem>
                        <NavLink href="#" className="small d-flex px-1">
                            <span>
                                Category ({this.state.options.length})
                        </span>
                            <i className="fa fa-angle-down align-self-center ml-auto"></i>
                        </NavLink>
                        {this.basicExample()}
                    </NavItem>
                </Nav>

                {/* <Nav vertical className="mb-3">
                    <NavItem className="mb-2">
                        <NavLink href="#" className="small d-flex px-1">
                            <span>
                                Vendor
                      </span>
                            <i className="fa fa-angle-down align-self-center ml-auto"></i>
                        </NavLink>
                    </NavItem>
                    {this.state.suppliers.map((supplier, index) => {
                        return (
                            <NavItem className="d-flex px-2 mb-2">
                                {index == 0 ?
                                    <CustomInput key={index} type="radio" id={index} name="rating" label={supplier.s_name} inline defaultChecked onChange={() => this.supplierOnClick(supplier)} /> :
                                    <CustomInput key={index} type="radio" id={index} name="rating" label={supplier.s_name} inline onChange={() => this.supplierOnClick(supplier)} />
                                }
                                <span className="small ml-auto align-self-center">
                                    ({faker.finance.mask()})
                                </span>
                            </NavItem>
                        )
                    })
                    }

                </Nav> */}
                <Nav vertical pills className="mb-3">
                    {this.renderButtonSwitch()}
                    <Button color="link" block onClick={this.handleSkip}>
                        Skip
                </Button>
                </Nav>
                <Nav vertical pills className="mb-3">
                    <NavItem>
                        <NavLink href="#" className="small d-flex px-1">
                            <span>
                                Chosen Product
                        </span>
                            <i className="fa fa-angle-down align-self-center ml-auto"></i>
                        </NavLink>
                        {lockedDownProduct ?
                            <Pulse>
                                <ImagesResultsCard key={JSON.stringify(lockedDownProduct)} product={lockedDownProduct} index={-1} onProductDelete={this.onLockedDownProductDelete} onProductAdd={this.onLockDownProductAdd} />
                            </Pulse> : null}
                    </NavItem>
                </Nav>




            </div>
        )
    }

    searchResults = ({ products }) => {
        const productsMap = products.map((product, index) => {
            return (
                <ImagesResultsCard key={JSON.stringify(product)} product={product} index={index} onProductDelete={this.onProductDelete} onProductAdd={this.onLockDownProductAdd} />
            )
        })
        return (
            <React.Fragment>
                <Container>
                    <HeaderMain
                        title="Create Product"
                        className="mb-5 mt-4"
                    />
                    { /* START Content */}
                    <HorizontalLinearStepper
                        activeStep={this.state.activeStep}
                        setActiveStep={this.setActiveStep}
                        skipped={this.state.skipped}
                        setSkipped={this.setSkipped}
                        handleNext={this.handleNextStep}
                        isStepOptional={isStepOptional}
                        handleSkip={this.handleSkip}
                    />
                    <br></br>
                    <Row>
                        <Col lg={3}>
                            {this.leftNavBar()}
                            {/* <SearchResultsLeftNav/> */}
                        </Col>
                        <Col lg={9}>
                            <SearchResultsHeader onSearch={this.handleOnSearch} onFinish={this.state.keyword} supplier={this.state.selected_supplier} />
                            {
                                this.state.isProductLoading ?
                                    <div className="row">
                                        <div className="col-sm-4"><SkeletonLoader style={{ marginBottom: "20px" }} height="450px" /> </div>
                                        <div className="col-sm-4"><SkeletonLoader style={{ marginBottom: "20px" }} height="450px" /> </div>
                                        <div className="col-sm-4"><SkeletonLoader style={{ marginBottom: "20px" }} height="450px" /> </div>
                                        <div className="col-sm-4"><SkeletonLoader style={{ marginBottom: "20px" }} height="450px" /> </div>
                                        <div className="col-sm-4"><SkeletonLoader style={{ marginBottom: "20px" }} height="450px" /> </div>
                                        <div className="col-sm-4"><SkeletonLoader style={{ marginBottom: "20px" }} height="450px" /> </div>
                                    </div>
                                    :
                                    <CardColumns>
                                        {productsMap}
                                    </CardColumns>
                            }


                        </Col>
                    </Row>
                    { /* END Content */}
                </Container>
            </React.Fragment>
        )
    };

    render() {
        const { products } = this.state
        return (
            this.searchResults({ products })

        )
    }
}


