var React = require('react');

// ROUTER
var HashHistory = require('react-router').hashHistory;

// FLUX
var SessionStore = require('../stores/sessionStore');

// COMPONENTS
var Header = require('./header/header');
var Footer = require('./footer/footer');
var Recipe = require('./recipes/recipe');

var App = React.createClass({

  getInitialState: function() {
    return ({ 
      loggedIn: SessionStore.loggedIn()
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

  welcome: function() {
    if (this.state.loggedIn) {
      return "Welcome, " + SessionStore.user().username + "!";
    } else {
      return ""
    }
  },

  displayRecipes: function() {
    if (this.state.recipes.length > 0) {
      return this.state.recipes.map(function(recipe) {
        return (
          <Recipe recipe={recipe} />
        )
      });
    } else {
      return (
        <div>You don't have any recipes! Make one below</div>
      )
    }
  },

  render: function() {
    return (
      <div className="flexColumn">
        <Header loggedIn={this.state.loggedIn}/>
        <div className="app">
          {this.welcome()}
          <div>
            {this.displayRecipes()}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
});


module.exports = App;
