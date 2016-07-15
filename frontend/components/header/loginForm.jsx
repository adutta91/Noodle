var React = require('react');

// FLUX
var SessionUtil = require('../../utils/sessionUtil');

var LoginForm = React.createClass({

  getInitialState: function() {
    return ({
      username: '',
      password: ''
    });
  },

  usernameChange: function(event) {
    event.preventDefault();
    this.setState({ username: event.currentTarget.value});
  },

  passwordChange: function(event) {
    event.preventDefault();
    this.setState({ password: event.currentTarget.value});
  },

  _onSubmit: function(event) {
    event.preventDefault();
    SessionUtil.loginUser({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    });
    this.props.modalCallback();
  },

  render: function() {
    return (
      <div className="form flexColumn">
        <div className="flexColumn">
          <h3>Hello!</h3>
          <h5>Please log in or sign up below!</h5>
        </div>
        <div className="inputBoxes flexColumn">
          <input type="text" onChange={this.usernameChange} placeholder="username" value={this.state.username}/>
          <input type="password" onChange={this.passwordChange} placeholder="password" value={this.state.password}/>
        </div>
        <div className="button" onClick={this._onSubmit}>Submit</div>
      </div>
    )
  }
});

module.exports = LoginForm;
