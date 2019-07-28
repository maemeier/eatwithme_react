import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import App from './App'

// import Event from './event'
// import CreateEvent from './createEvent'
import CreateRestaurant from './createRestaurant'
import Signup from './signup'
import Login from './login'
import Event from './event'
import userProfile from './userProfile'
import Restaurant from './restaurant'

class Routes extends Component {
//state
state = {
  loggedIn: false
}

//functions



checkAuth = ( ) => {
  if(localStorage.getItem('token')) {
    return true
  } else {
    return false
  }
}




auth = () => {
  this.setState({
    loggedIn: true
  }, () => {
    window.location.href ='/app'
  })
}

renderRedirect=()=> {
  alert('moody dragon bedtime story was really good! but you need to sign up to use this service')
  return <Redirect to='/signup' />
}

//render
render() {
  return (
    <BrowserRouter>
      <Switch>



        <Route path="/restaurant/:id" component={Restaurant} />
        <Route path ="/createRestaurant" component={CreateRestaurant} />
        <Route path ="/userProfile" component={userProfile} />
        <Route path ="/login" component={() => <Login auth={this.auth} />} />
        <Route path="/events/:id" render={() => (
            this.checkAuth() ? (<Event />) :  this.renderRedirect()
          )} />
        <Route path ="/signup" component={() => <Signup auth={this.auth} />} />
        <Route path ="/" component={App} />


      </Switch>
    </BrowserRouter>
  )
}
}
export default Routes;
