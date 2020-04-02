import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { Comparator, dateFilter } from 'react-bootstrap-table2-filter'
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import _ from 'lodash';
import faker from 'faker/locale/en_US';
import moment from 'moment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
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
    FormText,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCollapse,
    Avatar,
    AvatarAddOn,

} from './../../../../components';

import { TinyLineChart } from "../../../../routes/Dashboards/components/TinyLineChart";
import { TinyAreaChart } from "../../../../routes/Dashboards/Reports/components/TinyAreaChart";
import { LineBarAreaComposedChart } from "../../../../routes/Graphs/ReCharts/components/LineBarAreaComposedChart";
import { PieChartWithCustomizedLabel } from "../../../../routes/Graphs/ReCharts/components/PieChartWithCustomizedLabel";
import { TwoLevelPieChart } from "../../../../routes/Graphs/ReCharts/components/TwoLevelPieChart";
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

import bestbuyLogo from '../../../../images/avatars/bestbuy.png'
import staplesLogo from '../../../../images/avatars/staples.png'
import walmartLogo from '../../../../images/avatars/walmart.png'
import amazonLogo from '../../../../images/avatars/amazon.png'
import sourceLogo from '../../../../images/avatars/source.png'

const supplierLogoMap = {
    bestbuy: bestbuyLogo,
    staples: staplesLogo,
    walmart: walmartLogo,
    amazon: amazonLogo,
    source: sourceLogo,
}


const LAYOUT = {
    'metric-v-target-users': { h: 6, md: 4 },
    'metric-v-target-sessions': { h: 6, md: 4 },
    'metric-v-target-pageviews': { h: 6, md: 4 },
    'analytics-audience-metrics': { h: 12, minH: 12 },
    'form-add-product': { h: 3 },
}

import PieChart from 'react-minimal-pie-chart';
import colors from '../../../../colors'

const COLORS = [colors['primary'], colors['purple'], colors['success'], colors['yellow'], colors['warning'], colors['danger']];

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

//capitalize only the first letter of the string. 
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



export class AdvancedTableA extends React.Component {
    constructor() {
        super();
        this.state = {
            products: _.times(INITIAL_PRODUCTS_COUNT, generateRow),
            //map id to demand datas
            demandData: [],
            categories_agg: {},
            categories_peichart: [],
            categories: [],
            selected: [],
            layouts: _.clone(LAYOUT),
            show_add_product: false
        };

        this.headerCheckboxRef = React.createRef();
    }

    expandRow = {
        showExpandColumn: true,
        renderer: (row) => {
         
            return (
                <div>
                    <Card className="mb-4">
                        <Row>
                            <Col xl={5} lg={5}>
                                <CardBody className="bb-0">
                                    <span className="d-flex">
                                        {/* <CardTitle tag="h6" className="mb-0 bb-0">
                                            Allocation
                                        </CardTitle> */}
                                        <span className="ml-auto justify-content-start">
                                            <a href="javascript:;" className="ml-auto justify-content-start pr-2 text-decoration-none" id="AllocationTooltipSettings">
                                                <i className="fa fa-fw fa-sliders"></i>
                                            </a> <a href="javascript:;" id="AllocationTooltipAdd" className="text-decoration-none">
                                                <i className="fa fa-fw fa-plus"></i>
                                            </a>
                                        </span>
                                        <UncontrolledTooltip placement="top" target="AllocationTooltipSettings">
                                            Settings
                                        </UncontrolledTooltip>
                                        <UncontrolledTooltip placement="top" target="AllocationTooltipAdd">
                                            Add
                                        </UncontrolledTooltip>
                                    </span>
                                </CardBody>
                                <ListGroup flush className="mb-2">
                                    <ListGroupItem tag="a" href="#" id="RamToggler" className="by-0 mb-0 d-flex text-decoration-none">
                                        Your Position on {row.date}
                                        <i className="fa fa-fw fa-angle-down ml-auto justify-content-end" id="RamTooltip"></i>
                                    </ListGroupItem>
                                    <UncontrolledTooltip placement="top" target="RamTooltip">
                                        Show/Hide Section
                                    </UncontrolledTooltip>
                                </ListGroup>
                                <UncontrolledCollapse toggler="#RamToggler" isOpen>
                                    <CardBody className="pt-0">
                                        <dl className="row mb-3">
                                            <dt className="col-sm-5">Price</dt>
                                            <dd className="col-sm-7 text-right text-inverse">${row.price} at Bestbuy</dd>
                                            <dt className="col-sm-5">Difference From Min Price </dt>
                                            <dd className="col-sm-7 text-right text-inverse">${row.diff_from_min}</dd>
                                            <dt className="col-sm-8">Difference From Max Price </dt>
                                            <dd className="col-sm-4 text-right text-inverse">${row.diff_from_max}</dd>
                                            <dt className="col-sm-8">Difference From Avg Price </dt>
                                            <dd className="col-sm-4 text-right text-inverse">${row.diff_from_agg}</dd>
                                        </dl>
                                        {/* <Progress multi className="mt-2 mb-3" style={{height: "5px"}}>
                                            <Progress bar value="45" />
                                            <Progress bar color="danger" value="15" />
                                        </Progress> */}

                                        <CardTitle tag="h6" className="mb-3 bb-0">
                                            Market Price
                                        </CardTitle>

                                        <Table size="sm" className="mb-3">
                                            <tbody>
                                                <tr>
                                                    <td className="bt-0">
                                                        <i className="fa fa fa-circle-o mr-1" style={{ color: "green" }}></i>
                                                        Max Price
                                                    </td>
                                                    <td className="text-right text-inverse bt-0">
                                                        ${row.max_p} at {capitalizeFirstLetter(row.max_s)} <i className="fa fa-arrow-up fa-fw text-gray-300"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="fa fa fa-circle-o mr-1" style={{ color: "red" }}></i>
                                                        Min Price
                                                    </td>
                                                    <td className="text-right text-inverse">
                                                        ${row.min_p} at {capitalizeFirstLetter(row.min_s)} <i className="fa fa-arrow-down fa-fw text-gray-300"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="fa fa fa-circle-o mr-1" style={{ color: "orange" }}></i>
                                                        Average Price
                                                    </td>
                                                    <td className="text-right text-inverse">
                                                        ${row.agg_p} over {row.suppliers[0].length} vendors <i className="fa fa-arrow-right fa-fw text-gray-300"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                        <CardTitle tag="h6" className="mb-3 bb-0">
                                            Vendors
                                        </CardTitle>

                                        <Media>
                                            {
                                                row.suppliers[0].map((supplier, index) => {
                                                    if (!supplier) {
                                                        supplier = { s_name: "bestbuy" }
                                                    }
                                                    return (
                                                        <Media left key={supplier.s_name + index} className="align-self-center mr-4">
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
                                                                        color="success"
                                                                        key="avatar-icon-fg"
                                                                    />
                                                                ]}
                                                            />
                                                        </Media>
                                                    )
                                                })
                                            }
                                        </Media>
                                    </CardBody>


                                </UncontrolledCollapse>
                            </Col>
                            <Col xl={7} lg={7}>
                                <div className="mt-4 mr-3">
                                    <h6 className="card-title mb-3">
                                        Historical Price & Stock
                            </h6>
                                    <LineBarAreaComposedChart rowData={row} />
                                </div>
                                <div className="d-flex align-items-center mb-3 mr-4">
                                    <h6 className="card-title mb-1">
                                        Demand & Popularity (%)
                            </h6>
                                    <span className="ml-auto">
                                        <Button color="link" href="https://jsfiddle.net/alidingling/tv8zfzxo/" target="_blank">
                                            <i className="fa fa-external-link"></i>
                                        </Button>
                                    </span>
                                </div>
                                <TinyAreaChart className="mr-3" row={row} />

                            </Col>
                        </Row>
                        <CardFooter className="bt-0">
                            <span className="mr-3 ">
                                <i className="fa fa-refresh mr-1"></i> <span className="text-inverse">Last Updated: {moment(row.updated_at).format('DD/MM/YYYY')}</span>
                            </span>

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

    fetchDefaultProducts = () => {
        fetch(process.env.API_URL + '/product/supplier/')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                // let supplier = this.state.suppliers[getStepBySupplier("bestbuy")]
                // data.map(p => p.suppliers = [supplier])
                let products = []
                let historyGraphs = []
                let categories = {}
                let categories_agg = {}
                Object.keys(data).map(function (key, index) {
                    products.push(data[key])
                    if (categories[data[key]['category']]) {
                        categories[data[key]['category']].push({ value: data[key]['category'], label: data[key]['category'] })
                        categories_agg[data[key]['category']] += Math.round(data[key]['diff_from_agg'])
                    } else {
                        categories_agg[data[key]['category']] = Math.round(data[key]['diff_from_agg'])
                        categories[data[key]['category']] = [{ value: data[key]['category'], label: data[key]['category'], }]
                    }
                });
                _.reverse(products)
                let piechart = []
                let dropdown = []
                Object.keys(categories).forEach(el => {
                    piechart.push({ title: el, value: categories[el].length, color: COLORS[Math.floor(Math.random() * COLORS.length)] })
                    dropdown.push({ value: el, label: el })
                })
                this.setState({ products: products, categories: dropdown, categories_peichart: piechart, categories_agg: categories_agg })
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
            dataField: 'diff_trend',
            text: 'Trend',
            formatter: (cell) => {
                let pqProps;
                let trendIcon;
                switch (cell) {
                    case -1:
                        // pqProps = {
                        //     color: 'success',
                        //     text: cell,
                        //     value: Math.sign(cell)
                        // }
                        trendIcon = "fa fa-arrow-down fa-fw text-success"
                        break;
                    case 0:
                        pqProps = {
                            color: 'warning',
                            text: cell,
                        }
                        trendIcon = "fa fa-arrow-right fa-fw text-warning"
                        break;
                    case 1:
                        pqProps = {
                            color: 'danger',
                            text: "+" + cell,
                        }
                        trendIcon = "fa fa-arrow-up fa-fw text-danger"

                        break;
                    default:
                        pqProps = {
                            color: 'secondary',
                            text: cell,
                        }
                }

                return (
                    <i className={trendIcon}></i>

                    // <Badge color={pqProps.color}>
                    //    <span> {pqProps.text}  <i className={trendIcon} aria-hidden="true"></i>  </span>
                    // </Badge>
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
            dataField: 'diff_from_agg',
            text: 'Difference',
            formatter: (cell) => {
                let pqProps;
                let trendIcon;
                switch (Math.sign(cell)) {
                    case -1:
                        pqProps = {
                            color: 'success',
                            text: cell,
                            value: Math.sign(cell)
                        }
                        trendIcon = "fa fa-arrow-down fa-fw text-success"
                        break;
                    case 0:
                        pqProps = {
                            color: 'warning',
                            text: cell,
                        }
                        trendIcon = "fa fa-arrow-right fa-fw text-warning"
                        break;
                    case 1:
                        pqProps = {
                            color: 'danger',
                            text: "+" + cell,
                        }
                        trendIcon = "fa fa-arrow-up fa-fw text-danger"

                        break;
                    default:
                        pqProps = {
                            color: 'secondary',
                            text: cell,
                        }
                }

                return (
                    <Badge color={pqProps.color}>
                        <span> {pqProps.text}  </span>
                    </Badge>
                )
            },
            sort: true,
            sortCaret,
            ...buildCustomNumberFilter({
                comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
                getFilter: filter => { this.priceFilter = filter; }
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
        },
        //{
        //     dataField: 'price',
        //     text: 'Product Price',
        //     sort: true,
        //     sortCaret,
        //     ...buildCustomNumberFilter({
        //         comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
        //         getFilter: filter => { this.priceFilter = filter; }
        //     })
        // },
        // {
        //     dataField: 'min_p',
        //     text: 'Min Price',
        //     sort: true,
        //     sortCaret,
        //     ...buildCustomNumberFilter({
        //         comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
        //         getFilter: filter => { this.priceFilter = filter; }
        //     })
        // },
        // {
        //     dataField: 'max_p',
        //     text: 'Max Price',
        //     sort: true,
        //     sortCaret,
        //     ...buildCustomNumberFilter({
        //         comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
        //         getFilter: filter => { this.priceFilter = filter; }
        //     })
        // },
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
            text: 'Last Updated At',
            formatter: (cell) =>
                // moment(cell).format('DD/MM/YYYY'),
                moment(cell).toLocaleString(),
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
                                    rowHeight={85}
                                >
                                    <Grid.Col {...(applyColumn('metric-v-target-users', layouts))}>

                                        <Card>
                                            <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                                <i className="fa fa-ellipsis-v text-body mr-2"></i> Category
                                </CardHeader>
                                            <CardBody>
                                                <div className="d-flex">
                                                    <div>
                                                        <h6 className="card-title mb-1">
                                                            Category Distribution
                                <span className="small ml-1 text-muted">
                                                                {/* #4.05 */}
                                                            </span>
                                                        </h6>
                                                        <p>Pie Charts</p>
                                                    </div>
                                                    <span className="ml-auto">
                                                        <Button color="link" href="https://jsfiddle.net/alidingling/c9pL8k61/" target="_blank">
                                                            <i className="fa fa-external-link"></i>
                                                        </Button>
                                                    </span>
                                                </div>
                                                <PieChart
                                                    label
                                                    labelPosition={60}
                                                    labelStyle={{
                                                        fontFamily: 'sans-serif',
                                                        fontSize: '5px'
                                                    }}
                                                    lengthAngle={360}
                                                    lineWidth={20}
                                                    animate
                                                    animationDuration={500}
                                                    animationEasing="ease-out"
                                                    data={this.state.categories_peichart}
                                                />;
                                            </CardBody>
                                        </Card>
                                    </Grid.Col>
                                    <Grid.Col {...(applyColumn('metric-v-target-sessions', layouts))}>
                                        <Card>
                                            <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                                <i className="fa fa-ellipsis-v text-body mr-2"></i> Aggregation
                                </CardHeader>
                                            <CardBody className="pt-2">
                                                <CardTitle tag="h6" className="mt-2 mb-3 bb-0">
                                                    Total Difference By Category
                                    </CardTitle>

                                                <Table size="sm" className="mb-3">
                                                    <tbody>
                                                        {
                                                            Object.keys(this.state.categories_agg).map((cat, index) => (
                                                                <tr key={index}>
                                                                    <td className="bt-0">
                                                                        <i className="fa fa fa-circle-o mr-1" style={{ color: "green" }}></i>
                                                                        {cat}
                                                                    </td>
                                                                    <td className="text-right bt-0">
                                                                        ${this.state.categories_agg[cat]}
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }

                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                            <CardFooter>
                                                <Media className="small">
                                                    <Media left>
                                                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                                                    </Media>
                                                    <Media body>
                                                        This is an aggregation of all difference from minumum offering on the market by category
                                        </Media>
                                                </Media>
                                            </CardFooter>
                                        </Card>
                                    </Grid.Col>
                                    <Grid.Col {...(applyColumn('metric-v-target-pageviews', layouts))}>
                                        <Card>
                                            <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                                <i className="fa fa-ellipsis-v text-body mr-2"></i> Total Difference Overall
                                </CardHeader>
                                            <CardBody className="pt-2">
                                                <MetricVsTarget
                                                    title="Pageviews"
                                                    value="$2,669.01"
                                                    progressbarValue="34"
                                                    progressbarColor="secondary"
                                                    targetValue="$1,000"
                                                />
                                            </CardBody>
                                            <CardFooter>
                                                <Media className="small">
                                                    <Media left>
                                                        <i className="fa fa-fw fa-info-circle mr-2"></i>
                                                    </Media>
                                                    <Media body>
                                                        This is an aggregation of all difference from minumum offering on the market overall
                                        </Media>
                                                </Media>
                                            </CardFooter>
                                        </Card>
                                    </Grid.Col>
                                </Grid.Row>
                            </Grid>
                            <div className="d-flex justify-content-end align-items-center mb-2 mt-5">
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
                                expandRow={this.expandRow}
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