var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var UserStore = new Store(Dispatcher);

var _user = {};
var _userSearched = false;

UserStore.user = function() {
  return _user;
};

UserStore.userSearched = function() {
  return _userSearched;
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
  localStorage['noodleUserSearch'] = JSON.stringify(user);
};

var clearUser = function() {
  _user = {};
  _userSearched = false;
  localStorage.removeItem('noodleUserSearch');
}

var checkLocalStorage = function() {
  if (localStorage['noodleUserSearch']) {
    _user = JSON.parse(localStorage['noodleUserSearch']);
    _userSearched = true;
  }
};

checkLocalStorage();

module.exports = UserStore;
