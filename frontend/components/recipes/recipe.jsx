var React = require('react');

// FLUX
var SessionStore = require('../../stores/sessionStore');

// COMPONENTS
var MoreInfoButton = require('./moreInfoButton');
var DeleteRecipeButton = require('./deleteRecipeButton');

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

  render: function() {
    var recipeId = this.props.recipe.id;
    return (
      <div className="recipe flexColumn">
        {this.displayRecipe()}
        <MoreInfoButton recipeId={recipeId}/>
        {this.displayUser()}
      </div>
    )
  }
})

module.exports = Recipe;
