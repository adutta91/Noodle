var React = require('react');

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
    if (this.props.displayUser) {
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
