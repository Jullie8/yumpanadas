import React from 'react';
import './LandingPage.css';
import { Grid } from '@material-ui/core/';

import LandingNavBar from './LandingNavBar';
import SignUp from '../SignUp/SignUp';
import logo from '../../img/logo.png';

const LandingPage = ({ user, handleSubmit, createUser }) => (
  <div className="landing-pg">
    <LandingNavBar
      user={user}
      handleSubmit={handleSubmit}
    />

    <Grid className="sign-up-right" container spacing={2}>
      <Grid item sm>
        <img alt="logo" src={logo} height="400" />
      </Grid>

      <Grid item sm>
        <h2> Create a New Account </h2>
        <SignUp createUser={createUser} />
      </Grid>
    </Grid>
  </div>
);

export default LandingPage;
