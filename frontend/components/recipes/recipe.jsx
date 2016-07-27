var React = require('react');

// FLUX
var SessionStore = require('../../stores/sessionStore');

// COMPONENTS
var MoreInfoButton = require('./moreInfoButton');
var DeleteRecipeButton = require('./deleteRecipeButton');
var LikeRecipeButton = require('./likeRecipeButton');
var Frame = require('../reactDOMComponents/frame');

var Recipe = React.createClass({

  displayRecipe: function() {
    var recipe = this.props.recipe;
    return (
      <div>
        {recipe.title}
      </div>
    );
  },

  displayUser: function() {
    if (!SessionStore.loggedIn() || this.props.displayUser) {
      return (
        <h5>Saved by {this.props.recipe.user_username}</h5>
      )
    }
  },

  displayThumbnail: function() {
    return (
      // <Frame url={this.props.recipe.url}/>
      <div/>
    )
  },

  displayLike: function() {
    if (!SessionStore.loggedIn() || this.props.displayLike) {
      return (
        <LikeRecipeButton recipe={this.props.recipe}/>
      )
    }
  },

  render: function() {
    var recipeId = this.props.recipe.id;
    return (
      <div className="recipe flexColumn">
        { this.displayLike() }
        { this.displayRecipe() }
        { this.displayThumbnail() }
        <MoreInfoButton recipeId={recipeId}/>
        { this.displayUser() }
      </div>
    )
  }
})

module.exports = Recipe;
