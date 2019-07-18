import React, {Component} from 'react'
import './event.css'
import rest1 from './image/rest1.jpg'




class Event extends Component{
  render(){
    return (
      <div className="event">
        <button className="signup"type="button" name="button">Sign Up</button>
          <div className="bodyEvent">
            <div className="imageRestaurant">
            <img  className="restaurant" src={rest1}alt="rest1"/>
              </div>
                <div className="detail">
                  <h3 className="eventTitle">LET'S DINNER THIS FRIDAY!</h3>
                    <div className="eventText">
              <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit ipsum dolor </p>
              <p>sit amet, onsectetur adipiscing elit magna aliqua. ad minim veniam,</p>
              <p>sit amet, onsectetur adipiscing elit magna aliqua. ad minim veniam,</p>
              <p>sit amet, onsectetur adipiscing elit magna aliqua. ad minim veniam,</p>
                    </div>
              <div className="eventInfo">
              <h5 className="event">Date: 12 August 2019</h5>
              <h5 className="event">Time: 13:00</h5>
              <h5 className="event">Max 5 Person / 4 Avaliable</h5>
              <button className="book"type="button" name="button">BOOK THIS EVENT</button>
              </div>
            </div>
            </div>



      </div>
    );
  }
}


export default Event
