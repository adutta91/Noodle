var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var RecipeStore = new Store(Dispatcher);

var _recipes = [];

RecipeStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_RECIPES":
      resetRecipes(payload.recipes);
      RecipeStore.__emitChange();
      break;
  }
};

RecipeStore.recipes = function() {
  return _recipes;
};

var resetRecipes = function(recipes) {
  _recipes = recipes;
};


module.exports = RecipeStore;
