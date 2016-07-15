var SessionActions = require('../actions/sessionActions');

module.exports = {
  loginUser: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.loginUser(user);
      },
      error: function(error) {
        alert('session start error')
      }
    })
  },

  logoutUser: function(id) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      data: id,
      success: function(response) {
        SessionActions.logoutUser();
      },
      error: function(error) {
        alert('session end error');
      }
    });
  }
}
