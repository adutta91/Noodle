var React = require('react');

// FLUX
var SessionUtil = require('../../utils/sessionUtil');

var LoginButton = React.createClass({

  login: function(event) {
    event.preventDefault();
    SessionUtil.loginUser({
      user: {
        username: 'adutta',
        password: 'password'
      }
    });
  },

  render: function() {
    return (
      <div className="button" onClick={this.login}>Login</div>
    )
  }
})

module.exports = LoginButton;
