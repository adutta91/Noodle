var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var UserStore = new Store(Dispatcher);

var _user = {};

UserStore.user = function() {
  return _user;
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_USER':
      resetUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

var resetUser = function(user) {
  _user = user;
  localStorage['noodleSearch'] = JSON.stringify(user);
};

var checkLocalStorage = function() {
  if (localStorage['noodleSearch']) {
    _user = JSON.parse(localStorage['noodleSearch']);
  }
};

checkLocalStorage();

module.exports = UserStore;
