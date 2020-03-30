import React from 'react';
import faker from 'faker/locale/en_US';

import {
    Card,
    CardImg,
    HolderProvider,
    Media,
    Avatar,
    AvatarAddOn,
    CardFooter,
    CardBody,
    CardTitle,
    ButtonToolbar,
    Button
} from './../../../components';

import { randomArray, randomAvatar } from './../../../utilities';
import swal from 'sweetalert';
import bestbuyLogo from '../../../images/avatars/bestbuy.png'
import staplesLogo from '../../../images/avatars/staples.png'
import walmartLogo from '../../../images/avatars/walmart.png'
import amazonLogo from '../../../images/avatars/amazon.png'
import sourceLogo from '../../../images/avatars/source.png'

import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import axios from 'axios';
import Jump from 'react-reveal/Jump';
import Tada from 'react-reveal/Tada';

const supplierLogoMap = {
    bestbuy: bestbuyLogo,
    staples: staplesLogo,
    walmart: walmartLogo,
    amazon: amazonLogo,
    source: sourceLogo,
}

const status = [
    // "danger",
    "success",
    // "warning",
    // "secondary"
];

const stars = [
    <span key="stars5">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
    </span>,
    <span key="stars4">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars4">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars2">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars1">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
];


const ImagesResultsCard = ({ product, index, onProductDelete, onProductAdd }) => {
    return (
        <React.Fragment>
            { /* START Card */}
            <Card className="mb-3" style={index == -1 ? { backgroundColor: "white", borderRadius: "0.45rem" } : null}>
                <CardBody>
                    <div className="d-flex mb-4">
                        <CardTitle tag="h6">
                            {index}
                        </CardTitle>
                        <ButtonToolbar className="ml-auto">
                            {index == -1 ?
                                <Button color="primary" outline size="sm" onClick={() => onProductDelete(index)}>
                                    <i className="fa fa-fw fa-close"></i>
                                </Button> :
                                <Button color="primary" size="sm" className="mr-2" onClick={() => onProductAdd(product, index)}>
                                    <i className="fa fa-fw fa-check"></i>
                                </Button>
                            }
                        </ButtonToolbar>
                    </div>

                    <CardImg src={product.img} top className="mb-5" style={{ height: "100%", width: "100%", maxWidth: "100%", maxHeight: "100%" }} />

                    {/* <div className="d-flex mb-3" style={{height:"100px"}}> */}
                    <div className="d-flex mb-4" >
                        <span>
                            <div style={{ height: "70px", overflow: "scroll" }}>
                                <a className="h6 mb-2" href="#" >
                                    {product.p_name}
                                </a>
                            </div>

                            <br />

                            <a href="#" className="text-success mb-2">
                                {product.model_no}
                            </a>
                            <br />

                            <span className=""></span>
                            {randomArray(stars)}
                            <span className=""></span>
                            <br />
                            <a href="#" className="text-warning mb-2">
                                $ {product.price}
                            </a>

                            <br />

                        </span>
                        <a target="_blank" href={product.url} className="ml-auto">
                            <i className="fa fa-external-link"></i>
                        </a>
                    </div>

                    <Media>
                        {product.suppliers.map((supplier, index) => {
                            if(!supplier){
                                supplier = {s_name:"bestbuy"}
                            }
                            return (
                                    <Media left key={supplier.s_name + index} className="align-self-center mr-3">
                                        <Avatar.Image
                                            size="md"
                                            // src={randomAvatar()}
                                            src={supplierLogoMap[supplier.s_name]}
                                            className=''
                                            addOns={[
                                                <AvatarAddOn.Icon
                                                    className="fa fa-circle"
                                                    color="white"
                                                    key="avatar-icon-bg"
                                                />,
                                                <AvatarAddOn.Icon
                                                    className="fa fa-circle"
                                                    color={product.onlineAvailability ? "success" : "danger"}
                                                    key="avatar-icon-fg"
                                                />
                                            ]}
                                        />
                                    </Media>
                            )
                        })}

                        <Media body>

                            {/* <div className="mt-0 d-flex text-inverse">
                                BestBuy
                            </div> */}
                        </Media>
                    </Media>
                    <br />
                    <small>
                        SKU: {product.uuid}
                    </small>
                    <br />
                </CardBody>
                {index != -1 ?
                    <CardFooter className="bt-0">
                        <span className="mr-3">
                            <i className="fa fa-eye mr-1"></i> <span className="text-inverse">233</span>
                        </span>
                        <span>
                            <i className="fa fa-heart-o mr-1"></i> <span className="text-inverse">98</span>
                        </span>
                    </CardFooter> :
                    null
                }

            </Card>
            { /* END Card */}
        </React.Fragment>
    )
}

export { ImagesResultsCard };
