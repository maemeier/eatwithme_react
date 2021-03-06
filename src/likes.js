import React, { Component } from "react";
import "./body.css";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Likes extends Component {
  state = {
    count: this.props.likes,
    id: this.props.all._id
  };

  //functions

  increment = () => {
    this.setState(
      prevState => {
        return { count: prevState.count + 1 };
      },
      () => {
        axios.patch(`${process.env.REACT_APP_API}api/likes/${this.state.id}`, {likes: this.state.count}, {
	        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
	      }).then(res => {console.log("like");

				}).catch(err => {
            console.log("err", err);
          });
      }
    );
  };

  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={this.increment}
          style={{ color: "#E55681" }}
        />{" "}
        ({this.state.count})
      </div>
    );
  }
}

export default Likes;
