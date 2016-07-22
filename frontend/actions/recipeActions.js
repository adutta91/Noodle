var Dispatcher = require('../dispatcher');

module.exports = {
  receiveRecipes: function(recipes) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_RECIPES',
      recipes: recipes
    });
  },

  clearRecipes: function() {
    Dispatcher.dispatch({
      actionType: 'CLEAR_RECIPES'
    })
  }
}
