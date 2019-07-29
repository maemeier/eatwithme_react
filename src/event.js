import React, {Component} from 'react'
import './event.css'
import {Link} from 'react-router-dom'
const axios = require('axios')


class Event extends Component{

  state ={
    id: this.props.id,
    event: {},

    count: 0,
  }

  componentWillMount() {
    axios.get(`http://localhost:4000/api/getanEvent/${this.props.id}`).then((event) => {
      console.log('event', event)
      this.setState({event: event.data})
    })
  }

  render(){

    return (
      <div className="event">
        <Link to="/">
        <button className="signup"type="button" name="button">HOME</button>
        </Link>
        <div className="bodyEvent">
          <div className="imageRestaurant">

          <img  className="restaurant" src={this.state.event.image}alt="rest1"/>
            </div>
              <div className="detail">

                  <div className="eventText">
                    <h3 className="eventTitle">{this.state.event.title}</h3>
                      <div className="eventTextBox">
                      <p className="eventText">{this.state.event.body}</p>
                        </div>

                  </div>
            <div className="eventInfo">
            <h5 className="event">Date: {this.state.event.date} </h5>
            <h5 className="event">Time: {this.state.event.time}</h5>
            <h5 className="event">Max {this.state.event.person} Person / 4 Avaliable</h5>

            <button className="book"type="button" name="button">BOOK THIS EVENT</button>

            </div>
          </div>
          </div>
      </div>
    );
  }
}


export default Event
