var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/app');

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById("root");
  ReactDOM.render(<App/>, root)
});
