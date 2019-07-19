import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './App'

import Event from './event'

class Routes extends Component {
//state


//functions

//render
render() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path ="/event" component={Event} />

      <Route path ="/" component={App} />
      </Switch>
    </BrowserRouter>
  )
}
}
export default Routes;
