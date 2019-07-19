import React, {Component} from 'react'
import './body.css'
import Rest3 from './image/rest1.jpg'

import Rest1 from './image/rest3.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'




class Body extends Component{
  render(){
    return (

      <div className="body">

        <div className="content">

          <h3>LOREM IPSUM DOLOR SIT AMET</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p>sed do eiusmod tempor incididunt ut labore et dolore ident,</p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
          <h2>RECOMMENDED BY US </h2>

           <div className="wrapper">
             <div className="restaurantBox">
               <img className="sponser" src={Rest3} alt="rest1"/>

               <h6 className="title">OISHI RESTAURANT</h6>
               <h6 className="city">Phi Phi Island, Thailand</h6>
              </div>






          </div>

          <h2>NEW EVENTS </h2>
          <div className="wrapper">
            <div>
              <img className="sponser"src={Rest1} alt="rest1"/>
              <h6 className="title">BREAKFAST ON SUNDAY</h6>
              <h6>Phi Phi Island, Thailand</h6>
              <h6>Date: 20 August 2019</h6>
            </div>

            <div>
              <img className="sponser"src={Rest1} alt="rest1"/>
              <h6 className="title">BREAKFAST ON SUNDAY</h6>
              <h6>Phi Phi Island, Thailand</h6>
              <h6>Date: 20 August 2019</h6>
            </div>

            <div>
              <img className="sponser"src={Rest1} alt="rest1"/>
              <h6 className="title">BREAKFAST ON SUNDAY</h6>
              <h6>Phi Phi Island, Thailand</h6>
              <h6>Date: 20 August 2019</h6>
            </div>

            <div>
              <img className="sponser"src={Rest1} alt="rest1"/>
              <h6 className="title">BREAKFAST ON SUNDAY</h6>
              <h6>Phi Phi Island, Thailand</h6>
              <h6>Date: 20 August 2019</h6>
            </div>


          </div>



      </div>

    );
  }
}


export default Body
