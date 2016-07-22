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

  displayTitle: function() {
    var firstRecipe = this.state.recipes[0]
    if (SessionStore.loggedIn() && firstRecipe.user_id === SessionStore.user().id) {
      return (
        <h4>Your saved recipes</h4>
      )
    } else {
      return (
        <h4>{firstRecipe.user_username}'s saved recipes</h4>
      )
    }
  },

  render: function() {
    return (
      <div className="flexColumn">
      { this.displayTitle() }
        <div className="recipeList flexRow">
          { this.displayRecipes() }
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
