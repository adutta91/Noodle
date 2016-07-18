var React = require('react');

// FLUX
var UserStore = require('../../stores/userStore');

var UserSearchResults = React.createClass({

  getInitialState: function() {
    return ({
      user: UserStore.user()
    })
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  update: function() {
    this.setState({ user: UserStore.user() })
  },

  displayResults: function() {
    if (this.state.user.id) {
      return (
        <div>
          {this.state.user.username}
        </div>
      )
    } else {
      return (
        <div> No users with that username!</div>
      )
    }
  },

  render: function() {
    return (
      <div>
        {this.displayResults()}
      </div>
    )
  }
});

module.exports = UserSearchResults;
