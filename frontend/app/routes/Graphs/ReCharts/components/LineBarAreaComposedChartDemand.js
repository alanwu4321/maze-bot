import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
    ResponsiveContainer,
    ComposedChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Area,
    Bar,
    Line,
    Dot
} from '../../../../components/recharts';

import colors from '../../../../colors';


// eslint-disable-next-line react/prop-types
const generateDot = ({ stroke, ...other }) => (
    <Dot
        {...other}
        r={4}
        strokeWidth={2}
        fill={stroke}
        stroke={colors['white']}
    />
);

const LineBarAreaComposedChartDemand = ({ height, className, rowData }) => {
    const [demand, setDemand] = React.useState([])
    React.useEffect(
        () => {
            fetch(process.env.API_URL + `/product/demand/?p_id=${rowData.p_id}`)
                .then(res => res.json())
                .then((data) => {
                    setDemand(data)
                })
        },
        [rowData],
    );
    // const data = [{ date: '2020-02-01', inventory: rowData.price - Math.random() * 100, price: rowData.price, avg: rowData.agg_p, max: rowData.max_p, min: rowData.min_p },
    // { date: '2020-02-20', inventory: rowData.price + Math.random() * 100, price: rowData.price + 120, avg: rowData.agg_p, max: rowData.max_p, min: rowData.min_p },
    // { date: '2020-02-27', inventory: rowData.price - Math.random() * 100, price: rowData.price - 150, avg: rowData.agg_p, max: rowData.max_p, min: rowData.min_p },
    // { date: '2020-03-05', inventory: rowData.price + Math.random() * 100, price: rowData.price + 200, avg: rowData.agg_p, max: rowData.max_p, min: rowData.min_p },
    // { date: '2020-03-13', inventory: rowData.price - Math.random() * 100, price: rowData.price - 100, avg: rowData.agg_p, max: rowData.max_p, min: rowData.min_p },
    // { date: '2020-03-23', inventory: rowData.price + Math.random() * 100, price: rowData.price + 340, avg: rowData.agg_p, max: rowData.max_p, min: rowData.min_p  }];


    return (
        <ResponsiveContainer
            width='100%'
            minHeight='250px'
            className={className}
            {...(!_.isUndefined(height) ? {
                height
            } : {
                    aspect: 2 / 1
                })}
        >
            <ComposedChart data={demand}
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Line dataKey='agg_p' stroke="orange"/> */}
                {/* <Line dataKey='max_p' stroke="green"/>
                <Line dataKey='min_p' stroke="red"/> */}

                {/* <Bar dataKey='price' barSize={5} fill={colors['primary']} /> */}
                <Line dataKey='demand' stroke={colors['purple']} activeDot={{ r: 5 }} dot={generateDot} />
            </ComposedChart>
        </ResponsiveContainer>
    )
};
LineBarAreaComposedChartDemand.propTypes = {
    height: PropTypes.string,
    className: PropTypes.string
}

export { LineBarAreaComposedChartDemand };
