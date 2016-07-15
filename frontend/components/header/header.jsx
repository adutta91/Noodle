var React = require('react');

// FLUX
var SessionStore = require('../../stores/sessionStore');
var SessionUtil = require('../../utils/sessionUtil');

// COMPONENTS
var LoginButton = require('./loginButton');
var LogoutButton = require('./logoutButton');
var ProfileButton = require('./profileButton');

var Header = React.createClass({

  getInitialState: function() {
    return ({
      loggedIn: this.props.loggedIn
    });
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.sessionUpdate);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  sessionUpdate: function() {
    this.setState({ loggedIn: SessionStore.loggedIn() });
  },

  getButton: function() {
    if (this.state.loggedIn) {
      return (
        <div className="flexRow headerButtons">
          <ProfileButton />
          <LogoutButton />
        </div>
      );
    } else {
      return (
        <div className="flexRow headerButtons">
          <LoginButton />
        </div>
      )
    }
  },

  render: function() {
    return (
      <div className="header flexRow">
        <h2 className="title">NoodleOn</h2>
        {this.getButton()}
      </div>
    )
  }
})

module.exports = Header;
