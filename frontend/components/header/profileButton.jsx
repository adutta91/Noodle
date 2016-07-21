var React = require('react');

// FLUX
var SessionStore = require('../../stores/sessionStore');
var UserUtil = require('../../utils/userUtil');

var ProfileButton = React.createClass({

  getInitialState: function() {
    return ({
      user: SessionStore.user()
    });
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.sessionUpdate);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  sessionUpdate: function() {
    this.setState({ user: SessionStore.user() });
  },

  profileClicked: function(event) {
    event.preventDefault();
    UserUtil.fetchUserInfo(SessionStore.user().username);
  },

  getUsername: function() {
    if (this.state.user) {
      return this.state.user.username;
    } else {
      return 'Loading...'
    }
  },

  render: function() {
    return (
      <div className="button" onClick={this.profileClicked}>
        {this.getUsername()}
      </div>
    )
  }
});

module.exports = ProfileButton;
