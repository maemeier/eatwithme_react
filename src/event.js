import React, { Component } from "react";
import "./event.css";
import Nav from "./nav";
const axios = require("axios");

class Event extends Component {
  state = {
    id: this.props.id,
    event: {
      guests: []
    },
    count: 0
  };

  componentWillMount() {
    axios
      .get(`http://localhost:4000/api/getanEvent/${this.props.id}`)
      .then(event => {
        console.log("event", event);
        this.setState({ event: event.data });
      });
  }
  book = () => {
    console.log("book");
    axios
      .patch(
        `http://localhost:4000/api/events/${this.props.id}`,
        {
          attend: true
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        this.setState({
          event: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  // decrement = book => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  // book = () => {
  //   axios.patch(`http://localhost:4000/api/events/${this.props.id}`, "", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`
  //     }
  //   });
  // };

  render() {
    return (
      <div className="event">
        <Nav />
        <div className="bodyEvent">
          <div className="imageRestaurant">
            <img
              className="restaurant"
              src={this.state.event.file}
              alt="rest1"
            />
          </div>
          <div className="detail">
            <div className="eventText">
              <h3 className="eventTitle">{this.state.event.title}</h3>
              <h5 className="event">Date: {this.state.event.datetime} </h5>
              <h5 className="event">Time: {this.state.event.time}</h5>
              <h5 className="event">
                Max {this.state.event.person} Person /{" "}
                {this.state.event.person - this.state.event.guests.length}{" "}
                Avaliable{" "}
              </h5>
            </div>
            <div className="eventInfo">
              <div className="eventTextBox">
                <p className="eventText">{this.state.event.body}</p>
              </div>

              <button
                className="book"
                type="button"
                name="button"
                onClick={() => this.book()}
              >
                BOOK THIS EVENT
								
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
