import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import Nav from "./nav";
import logo from "./image/logoeat.png";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  // function
  changeEmail = e => {
    this.setState({ email: e.target.value });
  };
  changePassword = e => {
    this.setState({ password: e.target.value });
  };
  login = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}api/login`, this.state)
      .then(res => {
        if (!res.data.token) {
          this.setState({
            error: res.data
          });
        } else {
          this.setState({
            error: ""
          });
          localStorage.setItem("token", res.data.token);
          this.props.auth();
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-4 offset-4">
            <img className="logoSignup" src={logo} alt="logo" />
            <div className="card signup">
              <div className="card-body">
                <form onSubmit={e => this.login(e)}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email..."
                      value={this.state.email}
                      onChange={e => this.changeEmail(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password..."
                      value={this.state.password}
                      onChange={e => this.changePassword(e)}
                    />
                  </div>
                  <div className="error">{this.state.error}</div>
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                  <p>
                    Need an account? <Link to="/signup"> Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
