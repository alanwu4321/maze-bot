import React, { useState } from 'react';
import _ from 'lodash';
import {
    ResponsiveContainer,
    AreaChart,
    Area
} from './../../../../components/recharts';

import colors from './../../../../colors';

// const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const TinyAreaChart = ({rowData}) => {
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
    return (
        <ResponsiveContainer width='100%' height={40}>
            <AreaChart data={demand}>
                <Area dataKey='demand' stroke={colors['primary']} fill={colors['primary-03']} />
            </AreaChart>
        </ResponsiveContainer>
    )
};

export { TinyAreaChart };
