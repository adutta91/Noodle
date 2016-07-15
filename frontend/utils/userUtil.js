
var SessionActions = require('../actions/sessionActions');

module.exports = {
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      success: function(user) {
        SessionActions.loginUser(user);
      },
      error: function(error) {
        alert(error.responseText);
      }
    })
  }
}
