import React, {Component} from 'react'
import './event.css'
const axios = require('axios')
// import rest1 from './image/rest1.jpg'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';




class Event extends Component{

  state ={
    id: this.props.match.params.id,
    event: {}
  }

  componentWillMount() {
    axios.get(`http://localhost:4000/api/getanEvent/${this.props.match.params.id}`).then((event) => {
      console.log('event', event)
      this.setState({event: event.data})
    })
  }

  render(){
    return (
      <div className="event">
        <button className="signup"type="button" name="button">Sign Up</button>
        <div className="bodyEvent">
          <div className="imageRestaurant">
            <h3>{this.state.event.title}</h3>
          <img  className="restaurant" src={this.state.event.image}alt="rest1"/>
            </div>
              <div className="detail">

                  <div className="eventText">
            <p>{this.state.event.body}</p>

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
