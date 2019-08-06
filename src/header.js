import React, { Component } from "react";
import "./header.css";
// import logo from "./image/logoeat.png";
import pizza from "./image/pizza.png";
import drink from "./image/drink.png";
import bread from "./image/bread.png";
// import signup from "./image/signup.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logoAndButton"></div>

        <h1 className="TitleHeader">EAT WITH ME</h1>
        <div className="headerText">
          <h5 className="headerText1">
						There are many food & eating related applications from searching for restaurant to posting food images or learning how to cook. Online trend is tempting toward what should be the newest thing to eat. But have you ever had the feeling that you are missing out on those new food just because you don't want to eat alone in that trendy restaurant?

          </h5>
        </div>

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
