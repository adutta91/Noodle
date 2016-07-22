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
    case 'CLEAR_RECIPES':
      clearRecipes();
      RecipeStore.__emitChange();
      break;
  }
};

RecipeStore.recipes = function() {
  return _recipes;
};

RecipeStore.findById = function(id) {
  var target = null;
  _recipes.forEach(function(recipe) {
    if (recipe.id === id) {
      target = recipe;
      return;
    }
  });
  return target;
};

var clearRecipes = function() {
  _recipes = [];
  localStorage.removeItem('noodleRecipes');
};

var resetRecipes = function(recipes) {
  _recipes = recipes;
  localStorage['noodleRecipes'] = JSON.stringify(recipes);
};

var checkLocalStorage = function() {
  var recipes = localStorage['noodleRecipes'];
  if (recipes) {
    _recipes = JSON.parse(recipes);
  }
};

checkLocalStorage();

module.exports = RecipeStore;
