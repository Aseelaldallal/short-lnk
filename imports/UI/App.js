// React
import React, { Component } from 'react';
//React Router
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// Components, Containers
import Signup from './Signup';
import Link from './Link';
import NotFound from './NotFound';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/links" component={Link} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
