import React, { Component } from "react";
import "./body.css";
import Nav from "./nav";
import Header from "./header";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

class Body extends Component {
  state = {
    restaurant: ["mae"]
  };

  componentWillMount() {
    axios.get(`${process.env.REACT_APP_API}api/getRestaurant`).then(res => {
      console.log(res.data);
      this.setState({ restaurant: res.data });

      console.log(this.state.restaurant[0].title);
      console.log(this.state.restaurant[0].city);
    });
  }
  // createRestaurant function

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <h3 className="allRestaurantsText">
          <FontAwesomeIcon icon={faMedal} style={{ color: "#D3B55B" }} />
          <span></span>Recommended Restaurants
        </h3>
        <div className="body1">
          <div className="wrapper">
            {this.state.restaurant.map(c => {
              return (
                <div>
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
        </div>
      </div>
    );
  }
}

export default Body;
