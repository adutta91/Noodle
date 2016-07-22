var React = require('react');

// FLUX
var RecipeStore = require('../../stores/recipeStore');
var SessionStore = require('../../stores/sessionStore');
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
    fetchRecipes();
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
          <Recipe displayUser={false} key={recipe.id} recipe={recipe} />
        )
      });
    } else {
      if (SessionStore.loggedIn()) {
        return (
          <div>You don't have any recipes! Make one below</div>
        )
      } else {
        return (
          <div>You don't have any recipes! Login to make one</div>
        )
      }
    }
  },

  render: function() {
    return (
      <div className="flexColumn">
        <h4>Saved Recipes</h4>
        <div className="recipeList flexRow">
          {this.displayRecipes()}
        </div>
      </div>
    )
  }
});

var fetchRecipes = function() {
  if (RecipeStore.recipes().length > 0) {
    return;
  } else {
    RecipeUtil.fetchUserRecipes(SessionStore.user().id);
  }
};

module.exports = RecipeIndex;
