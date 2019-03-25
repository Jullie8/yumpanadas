import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import Login from '../Login/Login';

const LandingNavBar = (props) => (
    <AppBar position="static" style={{ background: '#ea6056' }} >
            <Toolbar>
                <Typography variant="h3" color="inherit" >
                    YUMPANADAS 
                </Typography>
                <Login user={props.user} handleSubmit={props.handleSubmit} />
            </Toolbar> 
    </AppBar>
)

export default LandingNavBar;