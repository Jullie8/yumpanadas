import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

import { Switch, Route, Link, withRouter } from "react-router-dom";

const Footer = (props) => {
    return (
        <Paper >
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered>

                <Tab label="Home"> <Link to="/users/profile"> </Link> </Tab>
                <Tab label="Pins"> <Link to="/users/pins"> </Link>  </Tab>
                {/* <Tab label="Item Three" /> */}
            </Tabs>
        </Paper>

    )
}

export default Footer; 