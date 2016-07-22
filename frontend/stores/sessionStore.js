var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _loggedInUser = {id: -1};
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
  var noodleUser = JSON.stringify(user);
  localStorage['noodleUser'] = noodleUser;
}

var logout = function() {
  localStorage.removeItem('noodleUser');
  localStorage.removeItem('noodleSearch');
  _loggedInUser = null;
  _loggedIn = false;
}

var checkForLogin = function() {
  var user = localStorage['noodleUser'];
  if(user) {
    _loggedInUser = JSON.parse(user);
    _loggedIn = true;
  }
};

checkForLogin();

module.exports = SessionStore;
