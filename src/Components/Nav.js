import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/'

const Nav = () => {
    return (
        <AppBar position="static" style={{ background: '#ea6056' }}>
            <Toolbar>
                <Typography variant="h3" color="inherit" >
                    YUMPANADAS
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;