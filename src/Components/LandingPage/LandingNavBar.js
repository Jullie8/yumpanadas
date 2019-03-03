import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core/';
import { Button, Form } from 'semantic-ui-react';
import Login from '../Login/Login';
// TODO: Update <Search> usage after its will be implemented

const LandingNavBar = (props) => (
    <AppBar position="static" style={{ background: '#d14149' }} >
            <Toolbar>
                <Typography variant="h3" color="inherit" >
                    YELP
                </Typography>
                    <p>For Empanadas</p> {" "}

                    {/* <Typography  > */}
                        <Login user={props.user} handleSubmit={props.handleSubmit} />
                    {/* </Typography> */}
            </Toolbar> 
        </AppBar>
)

export default LandingNavBar;