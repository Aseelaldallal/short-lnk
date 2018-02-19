import React, { Component } from 'react';

class Link extends Component {
  onLogout = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1> Your Links</h1>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

export default Link;
