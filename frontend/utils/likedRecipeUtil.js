
var LikedRecipeActions = require('../actions/likedRecipeActions');

var SessionStore = require('../stores/sessionStore');

module.exports = {
  fetchLikedRecipes: function(userId) {
    $.ajax({
      url: 'api/users/' + userId + "/recipe_likes",
      method: 'GET',
      success: function(recipes) {
        LikedRecipeActions.receiveRecipes(recipes);
      },
      error: function(error) {
        alert(error.responseText);
      }
    });
  },

  resetLikedRecipes: function() {
    LikedRecipeActions.receiveRecipes([]);
  },

  likeRecipe: function(recipeLike) {
    $.ajax({
      url: 'api/recipe_likes',
      method: 'POST',
      data: recipeLike,
      success: function(recipe) {
        LikedRecipeActions.addLikedRecipe(recipe);
      },
      error: function(error) {
        alert(error.responseText);
      }
    })
  },

  unlikeRecipe: function(recipeLike) {
    var that = this;
    $.ajax({
      url: 'api/recipe_likes',
      method: 'PATCH',
      data: recipeLike,
      success: function(response) {
        that.fetchLikedRecipes(SessionStore.user().id);
      },
      error: function(error) {
        alert(error.responseText);
      }
    })
  }
}
