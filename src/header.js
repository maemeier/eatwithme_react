import React, { Component } from "react";
import "./header.css";
import logo from "./image/logoeat.png";
import pizza from "./image/pizza.png";
import drink from "./image/drink.png";
import bread from "./image/bread.png";
import signup from "./image/signup.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logoAndButton">
          <img className="logo" src={logo} alt="logo" />
          <Link to="/userProfile">
            <img className="signup" src={signup} alt="signup" />
          </Link>
        </div>

        <h1>EAT WITH ME</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
        <h5>sed do eiusmod tempor incididunt ut labore et dolore ident,</h5>
        <h5>sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        <h5>sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        <h5>sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>

        <Link to="/createEvents">
          <button className="createEvents"> CREATE EVENT</button>
        </Link>
        <br />
        <div className="iconHeader">
          <div className="food1">
            <img className="food" src={pizza} alt="pizza" />
            <p className="food">FOOD</p>
          </div>

          <div className="food1">
            <img className="food" src={drink} alt="pizza" />
            <p className="food">DRINK</p>
          </div>

          <div className="food1">
            <img className="food" src={bread} alt="pizza" />
            <p className="food">BAKERY</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
