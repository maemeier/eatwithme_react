import React, { Component } from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Loginbutton from "./loginbutton";
import Logout from "./logout";

class Header extends Component {
  checkAuth = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    return (
      <div className="nav">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/createRestaurant">
            <li>Restaurant</li>
          </Link>
          {this.checkAuth() ? <Logout /> : <Loginbutton />}

          <Link to="/allRestaurants">
            <li>All</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;
