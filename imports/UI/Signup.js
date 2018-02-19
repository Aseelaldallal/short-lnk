import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div>
        <h1> Join short link</h1>
        <Link to="/"> Already have an account? </Link>
      </div>
    );
  }
}

export default Signup;
