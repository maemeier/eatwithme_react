import React, { Component } from "react";
import "./userProfile.css";
import Nav from "./nav";

const axios = require("axios");

class UserProfile extends Component {
  state = {
    id: this.props.match.params.id,
    user: {},

    idEvent: this.props.match.params.id,
    event: {}
  };

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}api/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(user => {
        console.log("userProfile", user);
        this.setState({ user: user.data });
        console.log("userdata", user.data);
      });
    axios
      .get(`${process.env.REACT_APP_API}api/getanEvent`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(event => {
        console.log("get Event", event);
        this.setState({ event: event.data });
        console.log("userdata", event.data);
      });
  }

  logout() {
    localStorage.clear();
    alert("You are leaving us!, We hope to see you soon 🥺 ");
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="userProfile">
          <div className="profile">
            <h1 className="profileTitle">Profile</h1>
            <h5 className="profileName">Name: {this.state.user.name}</h5>
            <h5 className="profileName">Email: {this.state.user.email}</h5>
            <h5 className="profileName">Your Event(s)</h5>
          </div>

          <div className="eventList">
            <div className="userEvent">
              <h5 className="profileName">Date:{this.state.event.datetime}</h5>
              <span>
                <h5 className="profileName">Event: {this.state.event.id}</h5>
              </span>
            </div>
            <button className="deleteEvent" onClick={this.logout}>
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
