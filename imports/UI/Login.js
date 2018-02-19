import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Login to Short Lnk </h1>login form here
        <Link to="/signup"> Don't have an account? </Link>
      </div>
    );
  }
}

export default Login;
