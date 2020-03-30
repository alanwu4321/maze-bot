import React from 'react';
import faker from 'faker/locale/en_US';

import {
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardTitle,
    ButtonToolbar,

} from './../../../components';

import { randomArray } from './../../../utilities';

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

const SearchResultsCard = ({ product, index }) => {
    console.log(index)

    return (
        <React.Fragment>
            <Card className="mb-3">
                <CardImg src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1019/1019306_sa.jpg" top />
                <CardBody>
                    <div className="d-flex mb-3">
                        <CardTitle tag="h6">
                            Button Right Toolbar Icons Only
                                </CardTitle>
                        <ButtonToolbar className="ml-auto">
                            <Button color="primary" size="sm" className="mr-2">
                                <i className="fa fa-fw fa-check"></i>
                            </Button>
                            <Button color="primary" outline size="sm">
                                <i className="fa fa-fw fa-close"></i>
                            </Button>
                        </ButtonToolbar>
                    </div>

                    <a href='#' className="h6 text-decoration-none">
                        {/* { faker.lorem.sentence() } */}
                        {product.p_name}
                    </a>
                    <br />
                    <div className="mb-2">
                        <span className="text-success">
                            {/* { faker.internet.url() } */}
                            {product.model_no}
                            {product.brand}
                            {product.category}
                        </span>
                        <span className="mx-2">·</span>
                        {randomArray(stars)}
                        <span className="mx-2">·</span>
                        <span>
                            Votes
                    </span>
                    </div>
                    <p className="mb-0">
                        {faker.lorem.paragraph()}
                    </p>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export { SearchResultsCard };
