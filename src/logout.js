import React from "react";
import { Link } from "react-router-dom";

class Logout extends React.Component {
  render() {
    return (
      <Link to="/userProfile">
        {" "}
        <li>Profile</li>{" "}
      </Link>
    );
  }
}

export default Logout;
