import React, {Component} from 'react'
import './restaurant.css'
import rest4 from './image/jan1.jpg'




class Restaurant extends Component{

  state ={
    restaurant: this.props.restaurant
  }


  render(){
    return (
      <div className="event">
        <button className="signup"type="button" name="button">HOME</button>
          <div className="bodyEvent">
            <div className="imageRestaurant">
            <img  className="restaurant" src={rest4}alt="rest1"/>
              </div>
                <div className="detail">

                  <h3 className="restTitle">{this.props.restaurant.title}</h3>
                    <div className="eventText">
                    <p className="restText"> {this.props.restaurant.body}</p>


                    </div>
              <div className="restInfo">
              <h5 className="info">Address: <span className="address"> {this.props.restaurant.address} </span></h5>
              <h5 className="info">Tel: <span className="address"> {this.props.restaurant.tel} </span></h5>
              <h5 className="info">Price: <span className="address"> {this.props.restaurant.price} Baht </span></h5>

              </div>
            </div>
            </div>



      </div>
    );
  }
}


export default Restaurant
