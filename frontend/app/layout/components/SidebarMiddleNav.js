import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-line-chart"></i>}
            title="Dashboards"
            to='/dashboard' exact
        >
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-product-hunt"></i>}
            title="Product"
        >
            <SidebarMenu.Item title="Update Product" to='/product/update' exact />
            <SidebarMenu.Item title="Add Product & Tracking" to='/product/add' exact />
        </SidebarMenu.Item>
{/*  */}
    </SidebarMenu >
);
