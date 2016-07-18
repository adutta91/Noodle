
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
  },

  createRecipe: function(recipe) {
    var that = this;
    $.ajax({
      url: 'api/recipes',
      method: 'POST',
      data: recipe,
      success: function(response) {
        that.fetchUserRecipes(recipe.recipe.user_id);
      },
      error: function(error) {
        alert(error.responseText)
      }
    })
  },

  deleteRecipe: function(id, userId) {
    var that = this;
    $.ajax({
      url: 'api/recipes/' + id,
      method: 'PATCH',
      success: function() {
        that.fetchUserRecipes(userId)
      },
      error: function(error) {
        alert(error.responseText)
      }
    })
  }
}
