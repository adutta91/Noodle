var React = require('react');

// FLUX
var RecipeStore = require('../../stores/recipeStore');
var RecipeUtil = require('../../utils/recipeUtil');

// COMPONENTS
var Recipe = require('./recipe');

var RecipeIndex = React.createClass({
  getInitialState: function() {
    return ({
      recipes: RecipeStore.recipes()
    });
  },

  componentDidMount: function() {
    RecipeUtil.fetchUserRecipes(this.props.userId);
    this.recipeListener = RecipeStore.addListener(this.updateRecipes);
  },

  componentWillUnmount: function() {
    this.recipeListener.remove();
  },

  updateRecipes: function() {
    this.setState({ recipes: RecipeStore.recipes() });
  },

  displayRecipes: function() {
    if (this.state.recipes.length > 0) {
      return this.state.recipes.map(function(recipe) {
        return (
          <Recipe key={recipe.id} recipe={recipe} />
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
