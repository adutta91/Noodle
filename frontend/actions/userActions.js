var Dispatcher = require('../dispatcher');

module.exports = {
  receiveUser: function(user) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_USER',
      user: user
    });
  },

  clearUser: function() {
    Dispatcher.dispatch({
      actionType: 'CLEAR_USER'
    });
  }
}
