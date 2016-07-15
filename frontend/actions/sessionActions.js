var Dispatcher = require('../dispatcher');

module.exports = {
  loginUser: function(user) {
    Dispatcher.dispatch({
      actionType: 'LOGIN_USER',
      user: user
    });
  },

  logoutUser: function() {
    Dispatcher.dispatch({
      actionType: 'LOGOUT_USER'
    })
  }
}
