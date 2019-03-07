import React from 'react';
import './LandingPage.css';
import LandingNavBar from './LandingNavBar';
import { Grid } from '@material-ui/core/';
import SignUp from '../SignUp/SignUp';
import logo from '../../img/logo.png';

class LandingPage extends React.Component {
    
    render () { 
        return (
            <div className="landing-pg">
                <LandingNavBar user={this.props.user} handleSubmit={this.props.handleSubmit} />

                <Grid className="sign-up-right" container spacing={2}>
                    <Grid item sm>
                        <img src={logo} height={'400'}/>
                    </Grid>

                    <Grid item sm >
                        <h2> Create a New Account </h2>
                        <SignUp createUser={this.props.createUser} /> 
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;