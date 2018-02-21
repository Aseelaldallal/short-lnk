import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';

class Link extends Component {
  componentWillMount() {
    console.log('Link: Component Will Mount: ', this.props);
    if (!this.props.user) {
      this.props.history.push('/');
    }
  }

  onLogout = () => {
    console.log('Logout clicked');
    Accounts.logout(() => {
      this.props.history.push('/');
    });
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

export default withTracker(props => {
  return {
    user: Meteor.user()
  };
})(Link);
