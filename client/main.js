// Meteor
import { meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/UI/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
