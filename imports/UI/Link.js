import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

class Link extends Component {
  onLogout = () => {
    console.log('Logout clicked');
    Accounts.logout();
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
