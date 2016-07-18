var React = require('react');

// ROUTER
var HashHistory = require('react-router').hashHistory;

// FLUX
var SessionStore = require('../stores/sessionStore');
var UserStore = require('../stores/userStore');

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
    this.userListener = UserStore.addListener(this.userUpdate);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
    this.userListener.remove();
  },

  sessionUpdate: function() {
    this.setState({
      loggedIn: SessionStore.loggedIn(),
      user: SessionStore.user()
    });
  },

  userUpdate: function() {
    this.setState({
      user: UserStore.user()
    });
  },

  welcome: function() {
    if (this.state.loggedIn && this.state.user.id === SessionStore.user().id) {
      return "Welcome, " + this.state.user.username + "!";
    } else if (!this.state.loggedIn) {
      return "Login to create and save recipes!"
    } else {
      return "~ " + this.state.user.username + "'s recipes ~"
    }
  },

  getUserId: function() {
    if (this.state.user) {
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
          <RecipeIndex userId={ this.getUserId() } />
        </div>
        <Footer />
      </div>
    )
  }
});


module.exports = App;
