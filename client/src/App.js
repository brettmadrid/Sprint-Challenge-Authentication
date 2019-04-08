import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import Register from './components/Registration';
//import Navigation from './components/Navigation';
import Logout from './components/Logout';

class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <>
        <header>
          {/* <Navigation /> */}
        </header>
        <main>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
          <Route path="/logout" component={Logout} />
        </main>
      </>
    );
  }
}

export default withRouter(App);
