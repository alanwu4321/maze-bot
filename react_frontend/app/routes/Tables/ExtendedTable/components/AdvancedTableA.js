import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { Comparator, dateFilter } from 'react-bootstrap-table2-filter'
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import _ from 'lodash';
import faker from 'faker/locale/en_US';
import moment from 'moment';

import {
    Badge,
    Button,
    CustomInput,
    StarRating,
    FloatGrid as Grid,
    Container,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    Media,
    CardBody,
    ListGroup,
    ListGroupItem,
    Progress,
    Table,
    CardTitle,
    CardFooter,
    CardHeader,
    InputGroup,
    InputGroupAddon,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from './../../../../components';

import { TinyLineChart } from "../../../../routes/Dashboards/components/TinyLineChart";

import {
    MetricVsTarget
} from "../../../components/Analytics/MetricVsTarget";

import { applyColumn } from '../../../../components/FloatGrid';
// import classes from './Analytics.scss';


import { CustomExportCSV } from './CustomExportButton';
import { CustomSearch } from './CustomSearch';
import { CustomPaginationPanel } from './CustomPaginationPanel';
import { CustomSizePerPageButton } from './CustomSizePerPageButton';
import { CustomPaginationTotal } from './CustomPaginationTotal';
import { randomArray } from './../../../../utilities';
import {
    buildCustomTextFilter,
    buildCustomSelectFilter,
    buildCustomNumberFilter
} from './../filters';

const LAYOUT = {
    'metric-v-target-users': { h: 6, md: 4 },
    'metric-v-target-sessions': { h: 6, md: 4 },
    'metric-v-target-pageviews': { h: 6, md: 4 },
    'analytics-audience-metrics': { h: 12, minH: 12 },
    'form-add-product': { h: 3 },
}

const INITIAL_PRODUCTS_COUNT = 500;

const ProductQuality = {
    Good: 'product-quality__good',
    Bad: 'product-quality__bad',
    Unknown: 'product-quality__unknown'
};

const sortCaret = (order) => {
    if (!order)
        return <i className="fa fa-fw fa-sort text-muted"></i>;
    if (order)
        return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
}

const generateRow = (index) => ({
    id: index,
    p_name: faker.commerce.productName(),
    quality: randomArray([
        ProductQuality.Bad,
        ProductQuality.Good,
        ProductQuality.Unknown
    ]),
    price: (1000 + Math.random() * 1000).toFixed(2),
    satisfaction: Math.round(Math.random() * 6),
    inStockDate: faker.date.past()
});


const expandRow = {
    showExpandColumn: true,
    renderer: function ExtendedRowRender(row) {
        console.log(row)
        return (
            <div>
                <p>{`This Expand row is belong to rowKey ${row.p_id}`}</p>
                <Card>
                    <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                        <i className="fa fa-ellipsis-v text-body mr-2"></i> Users
                                </CardHeader>
                    <CardBody className="pt-2">
                        <TinyLineChart data={_.times(100, () => ({ pv: Math.random() * 100 }))}/>
                        <MetricVsTarget
                            title="Users"
                            value="168,793"
                            progressbarColor="danger"
                            targetValue="169,001"
                        />
                    </CardBody>
                    <CardFooter>
                        <Media className="small">
                            <Media left>
                                <i className="fa fa-fw fa-info-circle mr-2"></i>
                            </Media>
                            <Media body>
                                How do your users (visitors), sessions (visits) and pageviews
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                        </Media>
                    </CardFooter>
                </Card>
            </div>
        );
    },
    expandHeaderColumnRenderer: ({ isAnyExpands }) => isAnyExpands ? (
        <i className="fa fa-angle-down fa-fw fa-lg text-muted"></i>
    ) : (
            <i className="fa fa-angle-right fa-fw fa-lg text-muted"></i>
        ),
    expandColumnRenderer: ({ expanded }) =>
        expanded ? (
            <i className="fa fa-angle-down fa-fw fa-lg text-muted"></i>
        ) : (
                <i className="fa fa-angle-right fa-fw fa-lg text-muted"></i>
            )
};


export class AdvancedTableA extends React.Component {
    constructor() {
        super();

        this.state = {
            products: _.times(INITIAL_PRODUCTS_COUNT, generateRow),
            // products: [],
            categories: [],
            selected: [],
            layouts: _.clone(LAYOUT),
            show_add_product: false
        };

        this.headerCheckboxRef = React.createRef();
    }

    fetchDefaultProducts = () => {
        fetch(process.env.API_URL + '/product/supplier/')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                // let supplier = this.state.suppliers[getStepBySupplier("bestbuy")]
                // data.map(p => p.suppliers = [supplier])
                let products = []
                let categories = []
                Object.keys(data).map(function (key, index) {
                    products.push(data[key])
                    categories.push({ value: data[key]['category'], label: data[key]['category'] })
                });
                this.setState({ products: products, categories: categories })
                // this.setState({ isProductLoading: false })
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.fetchDefaultProducts()
    }

    handleSelect(row, isSelected) {
        if (isSelected) {
            this.setState({ selected: [...this.state.selected, row.id] })
        } else {
            this.setState({
                selected: this.state.selected.filter(itemId => itemId !== row.id)
            })
        }
    }

    handleSelectAll(isSelected, rows) {
        if (isSelected) {
            this.setState({ selected: _.map(rows, 'id') })
        } else {
            this.setState({ selected: [] });
        }
    }

    handleAddRow() {
        const currentSize = this.state.products.length;

        this.setState({
            products: [
                generateRow(currentSize + 1),
                ...this.state.products,
            ]
        });
    }

    handleDeleteRow() {
        console.log(this.state.selected)
        this.setState({
            products: _.filter(this.state.products, product =>
                !_.includes(this.state.selected, product.id))
        })
    }

    handleResetFilters() {
        this.nameFilter('');
        this.qualityFilter('');
        this.priceFilter('');
        this.satisfactionFilter('');
    }

    createColumnDefinitions() {
        return [{
            dataField: 'p_id',
            text: 'Product ID',
            headerFormatter: column => (
                <React.Fragment>
                    <span className="text-nowrap">{column.text}</span>
                    <a
                        href="javascript:;"
                        className="d-block small text-decoration-none text-nowrap"
                        onClick={this.handleResetFilters.bind(this)}
                    >
                        Reset Filters <i className="fa fa-times fa-fw text-danger"></i>
                    </a>
                </React.Fragment>
            )
        }, {
            dataField: 'p_name',
            text: 'Product Name',
            sort: true,
            sortCaret,
            formatter: (cell) => (
                <span className="text-inverse">
                    {cell}
                </span>
            ),
            ...buildCustomTextFilter({
                placeholder: 'Enter product name...',
                getFilter: filter => { this.nameFilter = filter; }
            })
        }, {
            dataField: 'diff_from_min',
            text: 'Difference',
            formatter: (cell) => {
                let pqProps;
                switch (Math.sign(cell)) {
                    case -1:
                        pqProps = {
                            color: 'success',
                            text: cell,
                            value: Math.sign(cell)
                        }
                        break;
                    case 0:
                        pqProps = {
                            color: 'warning',
                            text: cell,
                            value: Math.sign(cell)

                        }
                        break;
                    case 1:
                        pqProps = {
                            color: 'danger',
                            text: cell,
                            value: Math.sign(cell)

                        }
                        break;
                    default:
                        pqProps = {
                            color: 'secondary',
                            text: cell,
                            value: Math.sign(cell)
                        }
                }

                return (
                    <Badge color={pqProps.color}>
                        {pqProps.text}
                    </Badge>
                )
            },
            sort: true,
            sortCaret,
            ...buildCustomSelectFilter({
                placeholder: 'Select Quality',
                options: [
                    { value: -1, label: 'Good' },
                    { value: 1, label: 'Bad' },
                    { value: 0, label: 'Warning' }
                ],
                getFilter: filter => { this.qualityFilter = Math.sign(filter); }
            })
        }, {
            dataField: 'category',
            text: 'Category',
            formatter: (cell) => {
                let pqProps;
                switch (cell) {
                    case ProductQuality.Good:
                        pqProps = {
                            color: 'success',
                            text: 'Good'
                        }
                        break;
                    case ProductQuality.Bad:
                        pqProps = {
                            color: 'danger',
                            text: 'Bad'
                        }
                        break;
                    case ProductQuality.Unknown:
                    default:
                        pqProps = {
                            color: 'secondary',
                            text: cell
                        }
                }

                return (
                    <Badge color={pqProps.color}>
                        {pqProps.text}
                    </Badge>
                )
            },
            sort: true,
            sortCaret,
            ...buildCustomSelectFilter({
                placeholder: 'Select Quality',
                options: this.state.categories,
                getFilter: filter => { this.qualityFilter = filter; }
            })
        }, {
            dataField: 'price',
            text: 'Product Price',
            sort: true,
            sortCaret,
            ...buildCustomNumberFilter({
                comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
                getFilter: filter => { this.priceFilter = filter; }
            })
        },
        {
            dataField: 'min_p',
            text: 'Min Price',
            sort: true,
            sortCaret,
            ...buildCustomNumberFilter({
                comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
                getFilter: filter => { this.priceFilter = filter; }
            })
        },
        {
            dataField: 'max_p',
            text: 'Max Price',
            sort: true,
            sortCaret,
            ...buildCustomNumberFilter({
                comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
                getFilter: filter => { this.priceFilter = filter; }
            })
        },
        // {
        //     dataField: 'satisfaction',
        //     text: 'Buyer Satisfaction',
        //     sort: true,
        //     sortCaret,
        //     formatter: (cell) =>
        //         <StarRating at={cell} max={6} />,
        //     ...buildCustomSelectFilter({
        //         placeholder: 'Select Satisfaction',
        //         options: _.times(6, (i) => ({ value: i + 1, label: i + 1 })),
        //         getFilter: filter => { this.satisfactionFilter = filter; }
        //     })
        // }, 
        {
            dataField: 'updated_at',
            text: 'In Stock From',
            formatter: (cell) =>
                moment(cell).format('DD/MM/YYYY'),
            filter: dateFilter({
                className: 'd-flex align-items-center',
                comparatorClassName: 'd-none',
                dateClassName: 'form-control form-control-sm',
                comparator: Comparator.GT,
                getFilter: filter => { this.stockDateFilter = filter; }
            }),
            sort: true,
            sortCaret
        }];
    }

    render() {
        const columnDefs = this.createColumnDefinitions();
        const { layouts, show_add_product } = this.state;

        const paginationDef = paginationFactory({
            paginationSize: 5,
            showTotal: true,
            pageListRenderer: (props) => (
                <CustomPaginationPanel {...props} size="sm" className="ml-md-auto mt-2 mt-md-0" />
            ),
            sizePerPageRenderer: (props) => (
                <CustomSizePerPageButton {...props} />
            ),
            paginationTotalRenderer: (from, to, size) => (
                <CustomPaginationTotal {...{ from, to, size }} />
            )
        });
        const selectRowConfig = {
            mode: 'checkbox',
            selected: this.state.selected,
            onSelect: this.handleSelect.bind(this),
            onSelectAll: this.handleSelectAll.bind(this),
            selectionRenderer: ({ mode, checked, disabled }) => (
                <CustomInput type={mode} checked={checked} disabled={disabled} />
            ),
            selectionHeaderRenderer: ({ mode, checked, indeterminate }) => (
                <CustomInput type={mode} checked={checked} innerRef={el => el && (el.indeterminate = indeterminate)} />
            )
        };

        return (
            <ToolkitProvider
                keyField="p_id"
                data={this.state.products}
                columns={columnDefs}
                search
                exportCSV
            >
                {
                    props => (
                        <React.Fragment>
                            {/* <Grid.Col {...(applyColumn('metric-v-target-users', layouts))}>
                                    <Card> */}
                            <Grid>
                                <Grid.Row
                                    onLayoutChange={layouts => this.setState({ layouts })}
                                    columnSizes={this.state.layouts}
                                    rowHeight={60}
                                >
                                    <Grid.Col {...(applyColumn('metric-v-target-users', layouts))}>
                                        <Card>
                                            <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                                <i className="fa fa-ellipsis-v text-body mr-2"></i> Users
                                </CardHeader>
                                            <CardBody className="pt-2">
                                                <MetricVsTarget
                                                    title="Users"
                                                    value="168,793"
                                                    progressbarColor="danger"
                                                    targetValue="169,001"
                                                />
                                            </CardBody>
                                            <CardFooter>
                                                <Media className="small">
                                                    <Media left>
                                                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                                                    </Media>
                                                    <Media body>
                                                        How do your users (visitors), sessions (visits) and pageviews
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                                </Media>
                                            </CardFooter>
                                        </Card>
                                    </Grid.Col>
                                    <Grid.Col {...(applyColumn('metric-v-target-sessions', layouts))}>
                                        <Card>
                                            <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                                <i className="fa fa-ellipsis-v text-body mr-2"></i> Sessions
                                </CardHeader>
                                            <CardBody className="pt-2">
                                                <MetricVsTarget
                                                    title="Sessions"
                                                    value="529,747"
                                                    progressbarValue="67"
                                                    progressbarColor="primary"
                                                    targetValue="782,957"
                                                />
                                            </CardBody>
                                            <CardFooter>
                                                <Media className="small">
                                                    <Media left>
                                                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                                                    </Media>
                                                    <Media body>
                                                        How do your users (visitors), sessions (visits) and pageviews
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                                </Media>
                                            </CardFooter>
                                        </Card>
                                    </Grid.Col>
                                    <Grid.Col {...(applyColumn('metric-v-target-pageviews', layouts))}>
                                        <Card>
                                            <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                                <i className="fa fa-ellipsis-v text-body mr-2"></i> Pageviews
                                </CardHeader>
                                            <CardBody className="pt-2">
                                                <MetricVsTarget
                                                    title="Pageviews"
                                                    value="1,763,981"
                                                    progressbarValue="34"
                                                    progressbarColor="secondary"
                                                    targetValue="1,567,334"
                                                />
                                            </CardBody>
                                            <CardFooter>
                                                <Media className="small">
                                                    <Media left>
                                                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                                                    </Media>
                                                    <Media body>
                                                        How do your users (visitors), sessions (visits) and pageviews
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                                </Media>
                                            </CardFooter>
                                        </Card>
                                    </Grid.Col>
                                    <Grid.Col {...(applyColumn('form-add-product', layouts))}>
                                        <Card className="mb-3">
                                            <CardBody>
                                                <CardTitle tag="h6" className="mb-4">
                                                    Forms Inline: Preview Example
                                <span className="small ml-1 text-muted">
                                                        #2.01
                                </span>
                                                </CardTitle>
                                                { /* START Form */}
                                                <Form inline>
                                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                        <Input type="text" name="text" id="enterName" placeholder="Enter Name..." />
                                                    </FormGroup>
                                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <i className="fa fa-key fa-fw" />
                                                            </InputGroupAddon>
                                                            <Input type="password" name="password" placeholder="Password..." />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                Country
                                        </InputGroupAddon>
                                                            <CustomInput type="select" id="country-selector-3" name="customSelect">
                                                                <option value="">Select...</option>
                                                                <option>United Kingdom</option>
                                                                <option>United States</option>
                                                                <option>Canada</option>
                                                                <option>Australia</option>
                                                                <option>New Zeland</option>
                                                            </CustomInput>
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <CustomInput type="checkbox" id="rememberMe" label="Remember Me" inline />
                                                    </FormGroup>
                                                    <Button color="primary">
                                                        Submit
                                </Button>
                                                </Form>
                                                { /* END Form */}
                                            </CardBody>
                                        </Card>
                                    </Grid.Col>

                                </Grid.Row>
                            </Grid>
                            <div className="d-flex justify-content-end align-items-center mb-2">
                                <h6 className="my-0">
                                    AdvancedTable A
                            </h6>
                                <div className="d-flex ml-auto">
                                    <CustomSearch
                                        className="mr-2"
                                        {...props.searchProps}
                                    />
                                    <ButtonGroup>
                                        <CustomExportCSV
                                            {...props.csvProps}
                                        >
                                            Export
                                    </CustomExportCSV>
                                        <Button
                                            size="sm"
                                            outline
                                            onClick={this.handleDeleteRow.bind(this)}
                                        >
                                            Delete
                                    </Button>
                                        <Button
                                            size="sm"
                                            outline
                                            onClick={this.handleAddRow.bind(this)}
                                        >
                                            <i className="fa fa-fw fa-plus"></i>
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                            <BootstrapTable
                                classes="table-responsive"
                                pagination={paginationDef}
                                filter={filterFactory()}
                                selectRow={selectRowConfig}
                                bordered={false}
                                expandRow={expandRow}
                                responsive
                                {...props.baseProps}
                            />
                        </React.Fragment>
                    )
                }
            </ToolkitProvider>
        );
    }
}