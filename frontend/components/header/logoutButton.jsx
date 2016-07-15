var React = require('react');

// FLUX
var SessionUtil = require('../../utils/sessionUtil');
var SessionStore = require('../../stores/sessionStore');

var LogoutButton = React.createClass({

  logout: function(event) {
    event.preventDefault()
    SessionUtil.logoutUser({id: SessionStore.user().id});
  },

  render: function() {
    return (
      <div className="button" onClick={this.logout}>Logout</div>
    );
  }
})

module.exports = LogoutButton;
