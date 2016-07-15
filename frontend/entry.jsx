var React = require('react');
var ReactDOM = require('react-dom');

var SessionUtil = require('./utils/sessionUtil');
var SessionStore = require('./stores/sessionStore');

var App = React.createClass({

  componentDidMount: function() {
    SessionStore.addListener(this.update);
    SessionUtil.loginUser({user: {username: 'adutta', password: 'password'}})
  },

  update: function() {
    alert('logged in!')
  },

  render: function() {
    return (
      <div>THIS IS AN APP!</div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById("root");
  ReactDOM.render(<App/>, root)
});
