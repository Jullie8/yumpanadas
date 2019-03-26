import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import Login from '../Login/Login';

const LandingNavBar = ({ user, handleSubmit }) => (
  <AppBar position="static" style={{ background: '#ea6056' }}>
    <Toolbar>
      <Typography variant="h3" color="inherit">
                    YUMPANADAS
      </Typography>
      <Login user={user} handleSubmit={handleSubmit} />
    </Toolbar>
  </AppBar>
);

export default LandingNavBar;
