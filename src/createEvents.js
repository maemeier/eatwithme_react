import React, { Component } from "react";
import "./createEvent.css";
import Nav from "./nav";
import axios from "axios";

class createEvents extends Component {
  state = {
    title: "",
    body: "",
    city: "",
    country: "",
    date: "",
    time: "",
    person: "",
    file: "",
    events: []
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/api/getEvent`)
      .then(res => {
        console.log("res data", res.data);
        this.setState({
          events: res.data
        });
        console.log("event", this.state);
      })
      .catch(err => {
        console.log("err axois getEvent", err);
      });
  }

  createEvent = e => {
    e.preventDefault();
    console.log("state", this.state);
    let form = new FormData();
    form.append("title", this.state.title);
    form.append("body", this.state.body);
    form.append("city", this.state.city);
    form.append("country", this.state.country);
    form.append("datetime", `${this.state.date}T${this.state.time}`);
    form.append("person", this.state.person);
    form.append("file", this.state.file);
    console.log("form", form);
    axios
      .post(`${process.env.REACT_APP_API}/api/event`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        let event = this.state.events;
        event.push(res.data);
        this.setState({ event });
        window.location = "/";
      })
      .catch(err => {
        console.log("error>>>>>>", err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFile = e => {
    console.log("file");
    this.setState({
      file: e.target.files[0]
    });
  };

  render() {
    return (
      <div className="eventsForm">
        <Nav />

        <div className="eventForm">
          <form
            onSubmit={e => {
              this.createEvent(e);
            }}
          >
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Title</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese add your title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Details</label>
              <input
                type="text"
                name="body"
                value={this.state.body}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Tell us about your event"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">City</label>
              <input
                type="city"
                name="city"
                value={this.state.city}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese type the city"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Country</label>
              <input
                type="country"
                name="country"
                value={this.state.country}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese type the country"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Date</label>
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese add your test"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Time</label>
              <input
                type="time"
                name="time"
                value={this.state.time}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese add your test"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Number of people </label>
              <input
                type="number"
                name="person"
                value={this.state.person}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese add your test"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Image</label>
              <input
                type="file"
                name="file"
                onChange={e => {
                  this.handleFile(e);
                }}
                className="form-control"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default createEvents;
