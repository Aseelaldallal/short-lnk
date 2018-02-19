import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('logging in');
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({ email }, password, err => {
      console.log('Login Callback', err);
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Short Link </h1>
        {this.state.error ? <p> {this.state.error} </p> : null}
        <form onSubmit={this.onSubmit}>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input
            type="password"
            ref="password"
            name="password"
            placeholder="Password"
          />
          <button> Login </button>
        </form>
        <Link to="/signup"> Don't have an account? </Link>
      </div>
    );
  }
}

export default Login;
