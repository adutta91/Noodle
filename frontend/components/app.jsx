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
var LikedRecipeIndex = require('./recipes/likedRecipeIndex');
var AddRecipeButton = require('./recipes/addRecipeButton');

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
      return (
        <h3>Welcome, {this.state.user.username}!</h3>
      );
    } else if (!this.state.loggedIn) {
      return (
        <h6>Login to create and save recipes!</h6>
      )
    } else {
      return (
        <h3>{this.state.user.username}'s recipes</h3>
      )
    }
  },

  getUserId: function() {
    if (this.state.user) {
      return this.state.user.id
    } else {
      return -1
    }
  },

  displayRecipeIndices: function() {
    if (SessionStore.user().id === UserStore.user().id) {
      return (
        <div>
          <h4>Saved Recipes</h4>
          <RecipeIndex />
          <h4>Liked Recipes</h4>
          <LikedRecipeIndex />
        </div>
      );
    } else {
      return (
        <div>
          <h4>Saved Recipes</h4>
          <RecipeIndex />
        </div>
      )
    }
  },

  render: function() {
    return (
      <div className="flexColumn">
        <Header loggedIn={this.state.loggedIn}/>
        <div className="app">
          <AddRecipeButton />
          { this.welcome() }
          { this.displayRecipeIndices() }
        </div>
        <Footer />
      </div>
    )
  }
});


module.exports = App;
