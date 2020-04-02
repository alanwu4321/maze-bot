import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    UncontrolledCollapse,
    SidebarTrigger,
    ThemeConsumer
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarMessages } from './NavbarMessages';
import { NavbarUser } from './NavbarUser';
import { LogoThemed } from './../../routes/components/LogoThemed/LogoThemed';

export const SidebarWithNavbarNavbar = () => {
    // const [tab, setTab] = React.useState(0);
    return (
        <ThemeConsumer>
            {
                ({ color }) => (
                    <React.Fragment>
                        { /*    First Navbar    */}
                        <Navbar
                            light
                            expand
                            fluid
                            className="bg-white pb-0 pb-lg-2"
                        >
                            <Nav navbar>
                                <NavItem>
                                    <SidebarTrigger />
                                </NavItem>
                                <NavItem className="navbar-brand d-lg-none">
                                    <Link to="/">
                                        <LogoThemed />
                                    </Link>
                                </NavItem>
                            </Nav>
                            
                            <h1
                                className="h5 mb-0 mr-auto ml-2 d-none d-lg-block"
                            >
                                Maze Bot

                    </h1>

                            <Nav navbar className="ml-auto">
                                <NavbarActivityFeed />
                                <NavbarMessages className="ml-2" />
                                <NavbarUser className="ml-2" />
                            </Nav>
                        </Navbar>
                        { /*    Second Navbar    */}
                        <Navbar
                            shadow
                            expand="lg"
                            light
                            color={color}
                            fluid
                            className="pt-0 pt-lg-2"
                        >
                            <h1 className="h5 mb-0 py-2 mr-auto d-lg-none">
                                Sidebar with Navbar
                    </h1>

                            <UncontrolledCollapse navbar toggler="#navbar-navigation-toggler">
                                <Nav accent navbar>
                                    <NavItem>
                                        <NavLink
                                            // active
                                            tag={Link}
                                            to="/dashboard"
                                        >
                                            Dashboard
                                    </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            // active
                                            tag={Link}
                                            to="/product/update"
                                        >
                                            Update
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link}
                                            to="/product/add">
                                            Add
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link}
                                            to="/product/edit">
                                            Edit
                                </NavLink>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>

                            <Nav navbar pills className="ml-auto">
                                <NavItem>
                                    <NavLink tag={NavbarToggler} id="navbar-navigation-toggler" className="b-0">
                                        <i className="fa fa-ellipsis-h fa-fw"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </React.Fragment>
                )
            }
        </ThemeConsumer>
    )
};
