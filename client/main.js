// Meteor
import { meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
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

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/links" component={Link} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  console.log('isAuth: ', isAuthenticated);
  const pathName = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);
  if (isUnauthenticatedPage && isAuthenticated) {
    history.push('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push('/');
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
