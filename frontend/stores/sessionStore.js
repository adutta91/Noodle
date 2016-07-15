var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _loggedInUser = null;
var _loggedIn = false;

var SessionStore = new Store(Dispatcher);

SessionStore.loggedIn = function() {
  return _loggedIn;
};

SessionStore.user = function() {
  return _loggedInUser;
};

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'LOGIN_USER':
      login(payload.user);
      SessionStore.__emitChange();
      break;
    case 'LOGOUT_USER':
      logout();
      SessionStore.__emitChange();
      break;
  }
};

var login = function(user) {
  _loggedInUser = user;
  _loggedIn = true;
  var foodieUser = JSON.stringify(user);
  localStorage['foodieUser'] = foodieUser;
}

var logout = function() {
  localStorage.removeItem('foodieUser');
  _loggedInUser = null;
  _loggedIn = false;
}

var checkForLogin = function() {
  var user = localStorage['foodieUser'];
  if(user) {
    _loggedInUser = JSON.parse(user);
    _loggedIn = true;
  }
};

checkForLogin();

module.exports = SessionStore;
