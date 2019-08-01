import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";

// import Event from './event'
// import CreateEvent from "./createEvents";
import CreateRestaurant from "./createRestaurant";
import Signup from "./signup";
import Login from "./login";
import Event from "./event";
import UserProfile from "./userProfile";
import Restaurant from "./restaurant";

class Routes extends Component {
  //state
  state = {
    loggedIn: false
  };

  //functions

  checkAuth = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };

  auth = () => {
    this.setState(
      {
        loggedIn: true
      },
      () => {
        window.location.href = "/app";
      }
    );
  };

  renderEvent = () => {};

  renderRedirect = () => {
    alert("Please sign up or log in before booking the event");
    return <Redirect to="/signup" />;
  };

  //render
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/restaurant/:id" component={Restaurant} />
          <Route path="/createRestaurant" component={CreateRestaurant} />
          <Route path="/userProfile" component={UserProfile} />
          <Route path="/login" component={() => <Login auth={this.auth} />} />
          <Route
            path="/events/:id"
            render={props =>
              this.checkAuth() ? (
                <Event id={props.match.params.id} />
              ) : (
                this.renderRedirect()
              )
            }
          />
          <Route path="/signup" component={() => <Signup auth={this.auth} />} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
