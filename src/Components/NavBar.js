import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
// import { Tab } from '@material-ui/core/Tabs '; 


const NavBar = (props) => {
    return (
        <Paper >
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered>

                <Tab label="Home" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Paper>

    )
}

export default NavBar; 