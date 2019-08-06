import React, { Component } from "react";
import "./userProfile.css";
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Nav from "./nav";


const axios = require("axios");

class UserProfile extends Component {
  state = {
    id: this.props.match.params.id,
    user: {},
		event: [],
		date: '',
  }

  componentWillMount() {
    axios.get(`${process.env.REACT_APP_API}api/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(user => {
        console.log("userProfile", user);

        this.setState({ user: user.data });
        console.log("userdata", user.data);
      });
    axios.get(`${process.env.REACT_APP_API}api/getuserevents`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(event => {


				console.log('fgfgf',this.state.date);
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
		console.log(this.state.event);
    return (
      <div>
        <Nav />
        <div className="userProfile">
					<button className="deleteEvent" onClick={this.logout}>
						SIGN OUT
					</button>
          <div className="profile">
            <h1 className="profileTitle">Profile</h1>
            <h5 className="profileName">Name: {this.state.user.name}</h5>
            <h5 className="profileName">Email: {this.state.user.email}</h5>
            <h5 className="profileName">Your Event(s)</h5>
          </div>

          <div className="eventList">
						<div className="wrapperProfile">
              {this.state.event.map(c => {
                return (
                  <div>
                    <a href={`/events/${c._id}`}>
                      <img className="sponser" src={c.file} alt="rest1" />
                    </a>
                    <h6 className="title">
                      {c.title}, {c.city}{" "}
                    </h6>

                    <h6 className="time"> <span><FontAwesomeIcon
						          icon={faCalendar} style={{ color: "#7F977D" }}/ > </span>
                      {moment(c.datetime).format('D MMM YYYY - h:mma')}
                    </h6>

                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
