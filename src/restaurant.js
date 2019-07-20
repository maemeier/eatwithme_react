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

                  <h3 className="restTitle">OISHI BUFFET RESTAURANT</h3>
                    <div className="eventText">
                    <p className="restText"> OISHI EATERIUM”, the new definition of Japanese restaurant, allows you to experience the taste that leads you to Japan under a harmonious blend of 3 concepts, EAT-EXPLORE-PREMIUM. Appetizing Japanese food is served  with selected ingredients and new initiatives that are finely integrated with Japanese dining culture. This is the first experience of eating with enjoyment through a wide array of flavors.</p>


                    </div>
              <div className="restInfo">
              <h5 className="info">Address: <span className="address"> Siam Paragon, Bangkok </span></h5>
              <h5 className="info">Tel: <span className="address"> 02-787-2783 </span></h5>
              <h5 className="info">Price: <span className="address"> 400 -1200 Baht </span></h5>

              </div>
            </div>
            </div>



      </div>
    );
  }
}


export default Restaurant
