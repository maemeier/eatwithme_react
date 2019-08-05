import React from "react";
import { Link } from "react-router-dom";

class Loginbutton extends React.Component {
  render() {
    return (
      <Link to="/login">
        {" "}
        <li>Sign up</li>{" "}
      </Link>
    );
  }
}

export default Loginbutton;
