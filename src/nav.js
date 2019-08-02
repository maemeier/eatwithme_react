import React, { Component } from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Header extends Component {
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
          <Link to="/signup">
            <li>Sign up</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;
