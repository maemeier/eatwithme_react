import React, { Component } from "react";
import "./createEvent.css";
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
    image: "",
    event: []
  };

  componentWillMount() {
    axios.get("http://localhost:4000/api/getEvent").then(res => {
      console.log("REST DATA", res.data);
    });
  }

  createrPlace = e => {
    e.preventDefault();
    let event = {
      title: this.state.title,
      body: this.state.body,
      city: this.state.city,
      country: this.state.country,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
      image: this.state.image
    };

    console.log("event", event);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let event = {
      title: this.state.title,
      body: this.state.body,
      city: this.state.city,
      country: this.state.country,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
      image: this.state.image
    };
    console.log("stateeeeee", this.state);
    this.setState({
      title: "",
      body: "",
      city: "",
      country: "",
      date: "",
      time: "",
      number: "",
      image: ""
    });
    axios
      .post("http://localhost:4000/api/event", event, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        let event = this.state.event;
        event.push(res.data);
        console.log("res", res.data);
        this.setState({ event });
      })
      .catch(err => {
        console.log("error>>>>>>", err);
      });
  };

  render() {
    return (
      <div className="eventForm">
        <form>
          <h1>Test</h1>
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
            <label htmlFor="formGroupExampleInput">country</label>
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
            <label htmlFor="formGroupExampleInput">date</label>
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
            <label htmlFor="formGroupExampleInput">time</label>
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
            <label htmlFor="formGroupExampleInput">number of person </label>
            <input
              type="number"
              name="number"
              value={this.state.number}
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
              name="image"
              value={this.state.image}
              onChange={e => {
                this.handleChange(e);
              }}
              className="form-control"
              placeholder="Plese add your test"
            />
          </div>

          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default createEvents;
