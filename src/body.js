import React, {Component} from 'react'
import './body.css'

import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Body extends Component{
state = {
  event:["mae"],
  restaurant: ["mae"],



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

        </div>
        <div className="recommend">
          <p className="recommend">RECOMMENDED BY US </p>
        </div>
           <div className="wrapper">
                 {
                   this.state.restaurant.map((c) => {

                     return(
                         <div className="restaurantBox">
                           <a href={`/restaurant/${c._id}`}>
                           <img className="sponser" src={c.image} alt="rest1"/>
                           </a>
                       <h6 className="title" >{c.title} </h6>
                       <h6 className="city">{c.city}, Thailand ({c.like})</h6>
                         </div>
                     )
                   })
                 }
          </div>

          <p className="recommend">NEW EVENT </p>
            <div className="wrapper">
                  {
                    this.state.event.map((c) => {

                      return(
                          <div>
                            <a href={`/events/${c._id}`}>
                            <img className="sponser" src={c.image} alt="rest1"/>
                            </a>
                            <h6 className="title" >{c.title} <FontAwesomeIcon icon={faHeart} style={{color:"#E55681"}} /> (12)</h6>
                            <h6 className="city">{c.city}, Thailand</h6>

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
