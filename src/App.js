import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Components/home'
import Contact from './Components/contact'
import About from './Components/about'
import Error from './Components/error'
import Nav from './Components/nav'
import Dashboard from './Components/dashboard'
import ProtectedRoute from "./Components/protect";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Nav/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route component={Error}  />
        </Switch>
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;
