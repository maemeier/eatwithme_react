import React, { Component } from "react";
import "./userProfile.css";
import { Link } from "react-router-dom";
const axios = require("axios");

class UserProfile extends Component {
  state = {
    id: this.props.match.params.id,
    user: {}
  };

  componentWillMount() {
    axios
      .get(`http://localhost:4000/api/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(user => {
        console.log("userProfile", user);
        this.setState({ user: user.data });
        console.log("userdata", user.data);
      });
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button className="userHome"> Home</button>
        </Link>
        <div className="userProfile">
          <div className="profile">
            <h1 className="profileTitle">Profile</h1>
            <h5 className="profileName">Name: {this.state.user.name}</h5>
            <h5 className="profileName">Email: {this.state.user.email}</h5>
            <h5 className="profileName">Your Event(s)</h5>
          </div>

          <div className="eventList">
            <div className="userEvent">
              <h5 className="profileName">Date: 10.08.2019</h5>{" "}
              <span>
                <h5 className="profileName">Event: CREPE TIME</h5>
              </span>
            </div>
            <button className="deleteEvent">DELETE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
