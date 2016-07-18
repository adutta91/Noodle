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

  render: function() {
    var recipeId = this.props.recipe.id;
    return (
      <div className="recipe flexColumn">
        {this.displayRecipe()}
        <MoreInfoButton recipeId={recipeId}/>
      </div>
    )
  }
})

module.exports = Recipe;
