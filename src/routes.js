import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './App'

// import Event from './event'
// import CreateEvent from './createEvent'
import CreateRestaurant from './createRestaurant'
import Signup from './signup'
import Login from './login'
import Event from './event'

class Routes extends Component {
//state


//functions

//render
render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/events/:id" component={Event} />
        <Route path ="/createEvent" component={CreateRestaurant} />
        <Route path ="/signup" component={Signup} />
        <Route path ="/login" component={Login} />

        <Route path ="/" component={App} />
      </Switch>
    </BrowserRouter>
  )
}
}
export default Routes;
