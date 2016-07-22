var Dispatcher = require('../dispatcher');

module.exports = {
  receiveRecipes: function(recipes) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_LIKED_RECIPES',
      recipes: recipes
    });
  },

  clearLikedRecipes: function() {
    Dispatcher.dispatch({
      actionType: 'CLEAR_LIKED_RECIPES'
    })
  }
}
