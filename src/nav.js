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
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/allRestaurants" style={{ textDecoration: "none" }}>
            <li>Restaurants</li>
          </Link>
          {this.checkAuth() ? <Logout /> : <Loginbutton />}
        </ul>
      </div>
    );
  }
}

export default Header;
