import React from 'react';
import './LandingPage.css';
import logo from '../.././img/logo.png';
import LandingNavBar from './LandingNavBar';

class LandingPage extends React.Component {
    
    render () {
        return (
            <div className="landing-pg">
                <LandingNavBar  />
                <img alt="" src={logo} className="logo-img" />
        
            </div>
        )
    }
}

export default LandingPage;