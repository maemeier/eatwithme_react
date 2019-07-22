import React, {Component} from 'react'
import './body.css'

import axios from 'axios';

import Rest1 from './image/rest3.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class Body extends Component{
state = {
  event:["mae"],
  restaurant: ["mae"]


}

componentWillMount() {
  		axios.get('http://localhost:4000/api/getEvent').then((res)=>{
        console.log(res.data);
        this.setState({event: res.data})

        console.log(this.state.event[0].title)
        console.log(this.state.event[0].city)
      })
      axios.get('http://localhost:4000/api/getRestaurant').then((res)=>{
        console.log(res.data);
        this.setState({restaurant: res.data})

        console.log(this.state.restaurant[0].title)
        console.log(this.state.restaurant[0].city)
      })



  	}






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
                 {
                   this.state.restaurant.map((c) => {

                     return(
                         <div className="restaurantBox">
                           <img className="sponser" src={c.image} alt="rest1"/>
                       <h6 className="title" >{c.title} </h6>
                       <h6 className="city">{c.city}, Thailand</h6>
                         </div>
                     )
                   })
                 }
          </div>

          <h2>NEW EVENTS </h2>
            <div className="wrapper">
                  {
                    this.state.event.map((c) => {

                      return(
                          <div>
                            <img className="sponser" src={c.image} alt="rest1"/>
                        <h6 className="title" >{c.title} </h6>
                        <h6 className="city">{c.city}, Thailand</h6>
                        <h6>{c.date}</h6>

                          </div>
                      )
                    })
                  }
           </div>



      </div>

    );
  }
}



export default Body
