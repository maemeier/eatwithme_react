import React, { Component } from "react";
import "./createEvent.css";
import Nav from "./nav";
import axios from "axios";

class createRestaurant extends Component {
  state = {
    title: "",
    body: "",
    address: "",
    tel: "",
    price: "",
    file: "",
    restaurants: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/getRestaurant")
      .then(res => {
        console.log("res data", res.data);
        this.setState({
          restaurants: res.data
        });
        console.log("restaurant", this.state);
      })
      .catch(err => {
        console.log("err axois getRestaurant", err);
      });
  }

  createRestaurant = e => {
    e.preventDefault();
    console.log("state", this.state);
    let form = new FormData();
    form.append("title", this.state.title);
    form.append("body", this.state.body);
    form.append("address", this.state.address);
    form.append("Tel", this.state.tel);
    form.append("price", this.state.price);
    form.append("file", this.state.file);
    console.log("form", form);
    axios
      .post("http://localhost:4000/api/restaurant", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        let restaurant = this.state.restaurants;
        restaurant.push(res.data);
        this.setState({ restaurant });
        window.location = "/";
      })
      .catch(err => {
        console.log("error restaurant", err);
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
      <div>
        <Nav />
        <form
          onSubmit={e => {
            this.createRestaurant(e);
          }}
        >
          <div className="eventInput">
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
                placeholder="Plese add your test"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Body</label>
              <input
                type="text"
                name="body"
                value={this.state.body}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese add your test"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Address</label>
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese add your test"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Tel</label>
              <input
                type="text"
                name="tel"
                value={this.state.tel}
                onChange={e => {
                  this.handleChange(e);
                }}
                className="form-control"
                placeholder="Plese add your test"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Price</label>
              <input
                type="text"
                name="price"
                value={this.state.price}
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
                placeholder="Upload the file"
              />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default createRestaurant;
