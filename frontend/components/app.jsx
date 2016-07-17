var React = require('react');

// ROUTER
var HashHistory = require('react-router').hashHistory;

// FLUX
var SessionStore = require('../stores/sessionStore');

// COMPONENTS
var Header = require('./header/header');
var Footer = require('./footer/footer');
var RecipeIndex = require('./recipes/recipeIndex');

var App = React.createClass({

  getInitialState: function() {
    return ({
      loggedIn: SessionStore.loggedIn(),
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
    this.setState({
      loggedIn: SessionStore.loggedIn(),
      user: SessionStore.user()
    });
  },

  welcome: function() {
    if (this.state.loggedIn) {
      return "Welcome, " + this.state.user.username + "!";
    } else {
      return ""
    }
  },

  getUserId: function() {
    if (this.state.loggedIn) {
      return this.state.user.id
    } else {
      return -1
    }
  },

  render: function() {
    return (
      <div className="flexColumn">
        <Header loggedIn={this.state.loggedIn}/>
        <div className="app">
          {this.welcome()}
          <RecipeIndex userId={this.getUserId()}/>
        </div>
        <Footer />
      </div>
    )
  }
});


module.exports = App;
