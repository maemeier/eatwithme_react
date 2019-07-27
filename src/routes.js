import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './App'

// import Event from './event'
// import CreateEvent from './createEvent'
import CreateEvents from './createEvents'
import Signup from './signup'
import Login from './login'
import Event from './event'
import userProfile from './userProfile'
import Restaurant from './restaurant'

class Routes extends Component {
//state


//functions

//render
render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/events/:id" component={Event} />
        <Route path="/restaurant/:id" component={Restaurant} />
        <Route path ="/createEvents" component={CreateEvents} />
        <Route path ="/signup" component={Signup} />
        <Route path ="/userProfile" component={userProfile} />
        <Route path ="/login" component={Login} />

        <Route path ="/" component={App} />
      </Switch>
    </BrowserRouter>
  )
}
}
export default Routes;
