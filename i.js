import React, { Component } from "react";
import "./body.css";

import axios from "axios";

import Likes from "./likes";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Body extends Component {
  state = {
    event: ["mae"],
    restaurant: ["mae"],

    count: 0
  };

  componentWillMount() {
    axios.get(`${process.env.REACT_APP_API}/api/getEvent`).then(res => {
      console.log("rrrr", res.data);
      this.setState({ event: res.data });
      this.setState({ count: res.data.likes });

      console.log(this.state.event[0].title);
      console.log(this.state.event[0].city);
    });
    axios.get(`${process.env.REACT_APP_API}/api/getRestaurant`).then(res => {
      console.log(res.data);
      this.setState({ restaurant: res.data });

      console.log(this.state.restaurant[0].title);
      console.log(this.state.restaurant[0].city);
    });
  }
  // createRestaurant function

  render() {
    return (
      <div className="body">
        <div className="wrapper">
          {this.state.restaurant.map(c => {
            return (
              <div className="restaurantBox">
                <a href={`/restaurant/${c._id}`}>
                  <img className="sponser" src={c.image} alt="rest1" />
                </a>
                <h6 className="title">{c.title} </h6>
                <h6 className="city">
                  {c.city}, Thailand ({c.like})
                </h6>
              </div>
            );
          })}
        </div>

        <div className="eventBox1"></div>

        <div className="wrapper">
          {this.state.event.map(c => {
            return (
              <div>
                <a href={`/events/${c._id}`}>
                  <img className="sponser" src={c.file} alt="rest1" />
                </a>
                <h6 className="title">
                  {c.title}{" "}
                  <span>
                    <Likes all={c} likes={c.likes} key={c._id} />{" "}
                  </span>
                </h6>
                <h6 className="city">
                  {c.city}, {c.country}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Body;
