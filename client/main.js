// Meteor
import { meteor } from 'meteor/meteor';
// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//React Router
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// Components, Containers
import Signup from '../imports/UI/Signup';
import Link from '../imports/UI/Link';
import NotFound from '../imports/UI/NotFound';
import Login from '../imports/UI/Login';

const history = createBrowserHistory();

const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/link" component={Link} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
