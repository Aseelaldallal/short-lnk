import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Auth
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('Signing up');
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Accounts.createUser({ email, password }, err => {
      console.log('Signup callback', err);
    });

    this.setState({
      error: 'Something went wrong.'
    });
  };

  render() {
    return (
      <div>
        <h1> Join short link</h1>
        {this.state.error ? <p> {this.state.error} </p> : null}
        <form onSubmit={this.onSubmit}>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input
            type="password"
            ref="password"
            name="password"
            placeholder="Password"
          />
          <button> Create Account </button>
        </form>

        <Link to="/"> Already have an account? </Link>
      </div>
    );
  }
}

export default Signup;
