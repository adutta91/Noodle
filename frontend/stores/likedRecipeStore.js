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
    case 'CLEAR_LIKED_RECIPES':
      clearRecipes();
      LikedRecipeStore.__emitChange();
      break;
  }
};

var clearRecipes = function() {
  _recipes = [];
  localStorage.removeItem('noodleLikedRecipes');
};

var resetRecipes = function(recipes) {
  _recipes = recipes;
  localStorage['noodleLikedRecipes'] = JSON.stringify(recipes);
};

var checkLocalStorage = function() {
  var recipes = localStorage['noodleLikedRecipes'];
  if (recipes) {
    _recipes = JSON.parse(recipes);
  }
};

checkLocalStorage();

module.exports = LikedRecipeStore;
