// FLUX
var SessionActions = require('../actions/sessionActions');
var RecipeActions = require('../actions/recipeActions');

var RecipeUtil = require('./recipeUtil');

module.exports = {
  loginUser: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.loginUser(user);
        RecipeUtil.fetchUserRecipes(user.id);
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
        RecipeActions.receiveRecipes([]);
      },
      error: function(error) {
        alert('session end error');
      }
    });
  }
}
