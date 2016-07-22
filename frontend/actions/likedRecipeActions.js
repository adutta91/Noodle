var Dispatcher = require('../dispatcher');

module.exports = {
  receiveRecipes: function(recipes) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_LIKED_RECIPES',
      recipes: recipes
    });
  }
}
