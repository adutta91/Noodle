var React = require('react');

// FLUX
var LikedRecipeStore = require('../../stores/likedRecipeStore');
var LikedRecipeUtil = require('../../utils/likedRecipeUtil');
var SessionStore = require('../../stores/sessionStore');

// COMPONENTS
var Recipe = require('./recipe');


var LikedRecipeIndex = React.createClass({

  getInitialState: function() {
    return ({
      recipes: LikedRecipeStore.recipes()
    })
  },

  componentDidMount: function() {
    this.recipeListener = LikedRecipeStore.addListener(this.update);
    LikedRecipeUtil.fetchLikedRecipes(SessionStore.user().id);
  },

  componentWillUnmount: function() {
    this.recipeListener.remove();
  },

  update: function() {
    this.setState({ recipes: LikedRecipeStore.recipes() });
  },

  displayRecipes: function() {
    return this.state.recipes.map(function(recipe) {
      var displayLike = recipe.user_id === SessionStore.user().id ? false : true;
      return (<Recipe displayLike={displayLike} displayUser={true} key={recipe.id} recipe={recipe}/>);
    });
  },

  render: function() {
    return (
      <div className="flexColumn">
        <h4>Liked Recipes</h4>
        <div className="recipeList flexRow">
          { this.displayRecipes() }
        </div>
      </div>
    )
  }
});

module.exports = LikedRecipeIndex;
