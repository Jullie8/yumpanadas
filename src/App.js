import React, { Component } from 'react';

import './App.css';

import { Switch, Route, withRouter } from "react-router-dom";

import LandingPage from './Components/LandingPage/LandingPage';
import MainContainer from './Containers/MainContainer';
import EmpanadaContainer from './Containers/EmpanadaContainer';
require('dotenv').config()
process.env.CI = false

class App extends Component {
  state = {
    user: {}
  } 
  
//figure out if a user is logged in or nah
componentDidMount () {
  if(localStorage.getItem("token")) {
    let token = localStorage.getItem("token")
    fetch("http://localhost:3000/api/v1/profile",{
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ user: data.user }, () => {
        console.log(this.props)
        if (this.props.location.pathname === '/'){
          this.props.history.push('/users/profile')
        }
      })
    })
  }
  else {
    this.props.history.push("/");
  }
}

renderUserDashBoard = props => {
  const { user } = this.state;
  if (!user) {
    return <div> Must log in first  </div>;
  }
  return <MainContainer user={user} value={0}/>;
};


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
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      let error = new Error("Log in failed, please try again.")
      throw error
    }
  })
  .then(data => {
    this.setState({ user: data.user }, () => { this.props.history.push('/users/profile') })
      localStorage.setItem("token", data.jwt)
      //TODO: redirect the user to their dashboard upon successful account creation
  })
  .catch(err => {
    console.error(err.message)
    alert(err.message)
  })
}

handleLoginUser = (e, userObj) => {
  console.log('you submitted!')

  let email= userObj.email;
  let password = userObj.password;

  fetch('http://localhost:3000/api/v1/login', {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ user: { email: email, password: password } })
  })
  .then(res => res.json())
  .then((data) => {
    // debugger 
    if (data.message){
      alert( `${data.message}`);
    }else {
      this.setState({ user: data.user }, () => { this.props.history.push('/users/profile')})
      localStorage.setItem("token", data.jwt)
    }
  })
}

  render() {
    console.log(this.props)
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" render={() => <LandingPage user={this.state.user} handleSubmit={this.handleLoginUser} createUser={ this.handleSubmitCreateUser }  /> } />
          <Route path="/users/profile" render={this.renderUserDashBoard} />
          <Route path="/users/favorites" render={() => <EmpanadaContainer user={this.state.user}/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
//Switch is used in this case b/c components that are not inside 
//switch would be returned on every single route

