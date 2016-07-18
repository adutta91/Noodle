var Dispatcher = require('../dispatcher');

module.exports = {
  receiveUser: function(user) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_USER',
      user: user
    });
  }
}
