import React, {Component} from 'react'
import './restaurant.css'
import rest2 from './image/rest2.jpg'




class Restaurant extends Component{
  render(){
    return (
      <div className="event">
        <button className="signup"type="button" name="button">HOME</button>
          <div className="bodyEvent">
            <div className="imageRestaurant">
            <img  className="restaurant" src={rest2}alt="rest1"/>
              </div>
                <div className="detail">

                  <h3 className="restTitle">OISHI BUFFET RESTAURANT</h3>

                    <p className="restText"> OISHI EATERIUM”, the new definition of Japanese restaurant, allows you to experience the taste that leads you to Japan under a harmonious blend of 3 concepts, EAT-EXPLORE-PREMIUM. Appetizing Japanese food is served  with selected ingredients and new initiatives that are finely integrated with Japanese dining culture. This is the first experience of eating with enjoyment through a wide array of flavors.</p>
                    <div className="eventText">

                    </div>
              <div className="restInfo">
              <h5 className="info">Address: Siam Paragon, Bangkok</h5>
              <h5 className="info">Telephone: 02-789-7890</h5>
              <h5 className="info">Price: 400 - 1200 Baht </h5>

              </div>
            </div>
            </div>



      </div>
    );
  }
}


export default Restaurant
