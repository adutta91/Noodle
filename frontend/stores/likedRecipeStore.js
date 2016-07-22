var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var LikedRecipeStore = new Store(Dispatcher);

var _recipes = [];

LikedRecipeStore.recipes = function() {
  return _recipes;
};

LikedRecipeStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_LIKED_RECIPES':
      resetRecipes(payload.recipes);
      LikedRecipeStore.__emitChange();
      break;
  }
};

var resetRecipes = function(recipes) {
  _recipes = recipes;
};

module.exports = LikedRecipeStore;
