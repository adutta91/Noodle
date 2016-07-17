
var RecipeActions = require('../actions/recipeActions');

module.exports = {
  fetchUserRecipes: function(id) {
    if (id > 0) {
      $.ajax({
        url: 'api/users/' + id + '/recipes',
        method: 'GET',
        success: function(recipes) {
          RecipeActions.receiveRecipes(recipes)
        },
        error: function(error) {
          alert(error.responseText);
        }
      });
    }
  }
}
