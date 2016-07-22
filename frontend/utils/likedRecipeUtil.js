
var LikedRecipeActions = require('../actions/likedRecipeActions');

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
  }
}
