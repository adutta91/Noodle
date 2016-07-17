var Dispatcher = require('../dispatcher');

module.exports = {
  receiveRecipes: function(recipes) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_RECIPES',
      recipes: recipes
    });
  }
}
