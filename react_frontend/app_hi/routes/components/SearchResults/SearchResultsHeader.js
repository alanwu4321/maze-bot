import React from 'react';

import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from './../../../components';
//capitalize only the first letter of the string. 
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export class SearchResultsHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: "",
            // selected: [],
            // layouts: _.clone(LAYOUT),
            // show_add_product: false
        };
        // this.headerCheckboxRef = React.createRef();
    }

    handleSearch = (callback) => {
        callback(this.state.keyword)
        this.setState({keyword: ""})
    }

    searchResultsHeader = ({ onSearch,keyword,onFinish, supplier}) => (
        <React.Fragment>
            <div className="mb-4">
                <h4 className="mt-2 mb-3">
                    <small className="mr-1">
                        Search Results for
                    </small> {onFinish.kw}
                    <small className="mr-2">
                        <small className="ml-3">
                            About  {onFinish.size} result ({onFinish.time} seconds)
                        </small>
                    </small>
                </h4>
                <InputGroup>
                    <Input placeholder={"Search on " + capitalizeFirstLetter(supplier.s_name)} className="bg-white" onChange={e => { 
                        this.setState({ keyword: e.target.value  }) 
                    }}
                        value={keyword} />
                    <InputGroupAddon addonType="append">
                        <Button color="primary" style={{outline: "none"}} onClick={() => this.handleSearch(onSearch)}>
                            <i className="fa fa-search"></i>
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </React.Fragment>
    )

    render() {
        const { onSearch, onFinish, supplier } = this.props
        const { keyword } = this.state

        return (
            this.searchResultsHeader({ onSearch, keyword, onFinish,supplier})
        )
    }

}



