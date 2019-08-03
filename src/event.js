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
    count: 0,
    button: "BOOK THIS EVENT",
    color: {
      background: "green"
    }
  };

  bookedEvent() {
    const { guests } = this.state;
    return guests === 0 ? "Full" : guests;
  }

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/api/getanEvent/${this.props.id}`)
      .then(event => {
        console.log("event", event);
        this.setState({ event: event.data });
      });
  }

  book = () => {
    if (this.state.button === "BOOK THIS EVENT") {
      console.log("book");
      axios
        .patch(
          `${process.env.REACT_APP_API}/api/events/${this.props.id}`,
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
            event: res.data,
            button: "ITZ BOOKED!",
            color: {
              background: "grey"
            }
          });
        })
        .catch(err => {
          console.log("err", err);
        });
    } else {
      alert("You have already booked this event!");
    }
  };

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
              <span>Staus{this.bookedEvent()}</span>
            </div>
            <div className="eventInfo">
              <div className="eventTextBox">
                <p className="eventText">{this.state.event.body}</p>
              </div>

              <button
                style={this.state.color}
                className="book"
                type="button"
                name="button"
                onClick={() => this.book()}
              >
                {this.state.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
