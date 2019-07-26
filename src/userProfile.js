import React, {Component} from 'react'
import './userProfile.css'


// import {Link} from 'react-router-dom'
// const axios = require('axios');




class userProfile extends Component{

  // state ={
  //   id: this.props.match.params.id,
  //   userProfile: {}
  // }
  //
  // componentWillMount() {
  //   axios.get(`http://localhost:4000/api/getanUser/${this.props.match.params.id}`).then((userProfile) => {
  //     console.log('userProfile', userProfile)
  //     this.setState({userProfile: userProfile.data})
  //   })
  // }

  render(){
    return (
      <div>
        <button className="userHome"> Home</button>
      <div className="userProfile">

        <div className="profile">
          <h1 className="profileTitle">Profile</h1>
          <h5 className="profileName">Name: Kangsadan Sangkhawichain</h5>
          <h5 className="profileName">Email: maemeier@live.com</h5>
          <h5 className="profileName">Your Event(s)</h5>

        </div>

        <div className="eventList">
        <div className="userEvent">
          <h5 className="profileName">Date: 10.08.2019</h5> <span><h5 className="profileName">Event: CREPE TIME</h5></span>
          </div>
          <button className="deleteEvent">DELETE</button>
        </div>

        <div className="eventList">
        <div className="userEvent">
          <h5 className="profileName">Date: 10.08.2019</h5> <span><h5 className="profileName">Event: CREPE TIME</h5></span>
          </div>
          <button className="deleteEvent">DELETE</button>
        </div>

        <div className="eventList">
        <div className="userEvent">
          <h5 className="profileName">Date: 10.08.2019</h5> <span><h5 className="profileName">Event: CREPE TIME</h5></span>
          </div>
          <button className="deleteEvent">DELETE</button>
        </div>
      </div>
      </div>

    );
  }
}


export default userProfile
