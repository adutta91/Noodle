
var RecipeUtil = require('./recipeUtil');

var SessionActions = require('../actions/sessionActions');
var UserActions = require('../actions/userActions');

module.exports = {
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.loginUser(user);
      },
      error: function(error) {
        alert(error.responseText);
      }
    })
  },

  fetchUserInfo: function(username) {
    $.ajax({
      url: 'api/users/' + username,
      method: 'GET',
      success: function(userInfo) {
        UserActions.receiveUser(userInfo);
        RecipeUtil.fetchUserRecipes(userInfo.id);
      },
      error: function(error) {
        alert(error.responseText);
      }
    })
  }
}
