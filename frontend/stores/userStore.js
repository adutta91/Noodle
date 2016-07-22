var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var UserStore = new Store(Dispatcher);

var _user = {};
var _userSearched = false;

UserStore.user = function() {
  return _user;
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_USER':
      resetUser(payload.user);
      UserStore.__emitChange();
      break;
    case 'CLEAR_USER':
      clearUser();
      UserStore.__emitChange();
      break;
  }
};

var resetUser = function(user) {
  _user = user;
  _userSearched = true;
  localStorage['noodleSearch'] = JSON.stringify(user);
};

var clearUser = function() {
  _user = {};
  _userSearched = false;
  localStorage.removeItem('noodleSearch');
}

var checkLocalStorage = function() {
  if (localStorage['noodleSearch']) {
    _user = JSON.parse(localStorage['noodleSearch']);
  }
};

checkLocalStorage();

module.exports = UserStore;
