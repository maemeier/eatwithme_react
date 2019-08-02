import React from "react";
import { Link } from "react-router-dom";

class Loginbutton extends React.Component {
  render() {
    return (
      <Link to="/login">
        {" "}
        <li>Login</li>{" "}
      </Link>
    );
  }
}

export default Loginbutton;
