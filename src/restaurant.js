import React, { Component } from "react";
import "./restaurant.css";
import rest4 from "./image/jan1.jpg";
import Nav from "./nav";
const axios = require("axios");

class Restaurant extends Component {
  state = {
    id: this.props.match.params.id,
    restaurant: {}
  };

  componentWillMount() {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/getanRestaurant/${this.props.match.params.id}`
      )
      .then(restaurant => {
        console.log("restaurant", restaurant);
        this.setState({ restaurant: restaurant.data });
      });
  }

  render() {
    return (
      <div className="event">
        <Nav />

        <div className="bodyEvent">
          <div className="imageRestaurant">
            <img className="restaurant" src={rest4} alt="rest1" />
          </div>
          <div className="detail">
            <h3 className="restTitle">{this.state.restaurant.title}</h3>
            <div className="eventText">
              <p className="restText"> {this.state.restaurant.body}</p>
            </div>
            <div className="restInfo">
              <h5 className="info">
                Address:{" "}
                <span className="address">
                  {" "}
                  {this.state.restaurant.address}{" "}
                </span>
              </h5>
              <h5 className="info">
                Tel:{" "}
                <span className="address"> {this.state.restaurant.tel}</span>
              </h5>
              <h5 className="info">
                Price:{" "}
                <span className="address">
                  {" "}
                  {this.state.restaurant.price} Baht{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
