import React, { Component } from "react";
import "./body.css";
import axios from "axios";

class Books extends Component {
  state = {
    count: this.props.books,
    id: this.props.all._id
  };

  //functions
  decrementButton = () => {
    console.log("Booked!");
    axios
      .patch(`${process.env.REACT_APP_API}/api/event/${this.state.event._id}`, {
        books: this.state.event.books - 1
      })
      .then(res => {
        this.setState({
          event: res.data
        });
        console.log("res.data from axios ", res.data);
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <div>
        ({this.state.count})
        <button onClick={this.decrementButton}> Book this event </button>(
        {this.state.event.books})
      </div>
    );
  }
}

export default Books;
