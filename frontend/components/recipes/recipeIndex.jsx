var React = require('react');

var Recipe = require('./recipe');

var RecipeIndex = React.createClass({
  getInitialState: function() {
    return ({
      recipes: []
    });
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
      <div className="recipeList">
        {this.displayRecipes()}
      </div>
    )
  }
});

module.exports = RecipeIndex;
