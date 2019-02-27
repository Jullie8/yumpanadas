import React, { Component } from 'react';
import './App.css';

// import AppBar from 'material-ui/AppBar';

import MainContainer from './Containers/MainContainer';


// import { Link, Switch, Route } from "react-router-dom";


import { AppBar, Toolbar, Typography } from '@material-ui/core/';

class App extends Component {
  render() {

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" color="inherit" >
              YELP
            </Typography>
          </Toolbar> 
        </AppBar>

        <MainContainer />
      </div>
    );
  }
}

export default App;
