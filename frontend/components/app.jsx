var React = require('react');

// ROUTER
var HashHistory = require('react-router').hashHistory;

// FLUX
var SessionStore = require('../stores/sessionStore');
var UserStore = require('../stores/userStore');
var RecipeStore = require('../stores/recipeStore');
var LikedRecipeStore = require('../stores/likedRecipeStore');

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
      user: SessionStore.user(),
      recipes: RecipeStore.recipes(),
      likedRecipes: LikedRecipeStore.recipes()
    });
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.updateSession);
    this.userListener = UserStore.addListener(this.updateUser);
    this.recipeListener = RecipeStore.addListener(this.updateRecipes);
    this.likedRecipeListener = LikedRecipeStore.addListener(this.updateRecipes);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
    this.userListener.remove();
    this.recipeListener.remove();
    this.likedRecipeListener.remove();
  },

  updateSession: function() {
    this.setState({
      loggedIn: SessionStore.loggedIn(),
      user: SessionStore.user()
    });
  },

  updateUser: function() {
    this.setState({ user: UserStore.user() });
  },

  updateRecipes: function() {
    this.setState({
      recipes: RecipeStore.recipes(),
      likedRecipes: LikedRecipeStore.recipes()
    })
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
    if (UserStore.user().id === SessionStore.user().id) {
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
