
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
        console.log("recipe add success");
        that.fetchUserRecipes(recipe.recipe.user_id);
      },
      error: function(error) {
        alert(error.responseText)
      }
    })
  }
}
