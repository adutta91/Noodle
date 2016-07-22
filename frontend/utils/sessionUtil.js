// FLUX
var SessionActions = require('../actions/sessionActions');
var RecipeActions = require('../actions/recipeActions');
var LikedRecipeActions = require('../actions/likedRecipeActions');
var UserActions = require('../actions/userActions');

var RecipeUtil = require('./recipeUtil');
var LikedRecipeUtil = require('./likedRecipeUtil');

module.exports = {
  loginUser: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.loginUser(user);
        RecipeActions.receiveRecipes(user.id);
        LikedRecipeUtil.fetchLikedRecipes(user.id);
      },
      error: function(error) {
        alert('session start error')
      }
    })
  },

  logoutUser: function(id) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      data: id,
      success: function(response) {
        SessionActions.logoutUser();
        RecipeActions.clearRecipes();
        LikedRecipeActions.clearLikedRecipes();
        UserActions.clearUser();
      },
      error: function(error) {
        alert('session end error');
      }
    });
  }
}
