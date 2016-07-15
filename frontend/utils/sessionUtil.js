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
        alert('session error')
      }
    })
  },

  logoutUser: function() {
    
  }
}
