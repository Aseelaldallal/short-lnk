import { meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Signup extends Component {
  render() {
    return <p> Signup Component Here </p>;
  }
}

Meteor.startup(() => {
  ReactDOM.render(<Signup />, document.getElementById('app'));
});
