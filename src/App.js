import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";

import MainContainer from './Containers/MainContainer';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';


class App extends Component {
  //TODO: will need to check if the user exists on commponent did mount check if token exists in localStorage
state = {
  user: {}
}

handleSubmitCreateUser = (e, userObj) => {
  e.preventDefault();

  let username = userObj.username;
  let email = userObj.email;
  let password = userObj.password;

  fetch('http://localhost:3000/api/v1/users', {
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
        Accepts: 'application/json'
    },
    body: JSON.stringify(
    { 
      user: {
      username: username, 
      email:email,
      password: password
    }
  })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert(`${data.error}`)
    }else{
      this.setState({ user: data.user })
      //TODO: redirect the user to their dashboard upon successful account creation
    }
    //data.error ? alert(`${data.error}`) : this.setState({ user:data.user})
  })
}

  render() {

    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" render={() => <SignUp handleSubmit={ this.handleSubmitCreateUser } /> } />

          <Route path="/somethinelse" component={MainContainer} />
        </Switch>
        {/* <MainContainer /> to be added as in Route */}
      </div>
    );
  }
}

export default App;
