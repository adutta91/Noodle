var React = require('react');

// FLUX
var UserUtil = require('../../utils/userUtil');
var LikedRecipeUtil = require('../../utils/likedRecipeUtil');
var SessionStore = require('../../stores/sessionStore');

var UserSearch = React.createClass({

  getInitialState: function() {
    return ({
      searchValue: ""
    });
  },

  valueChange: function(event) {
    this.setState({ searchValue: event.currentTarget.value });
  },

  keyPress: function(event) {
    if (event.key === "Enter") {
      UserUtil.fetchUserInfo(this.state.searchValue);
      if (SessionStore.user() && this.state.searchValue !== SessionStore.user().username) {
        LikedRecipeUtil.resetLikedRecipes();
      }
      this.setState({ searchValue: "" });
    }
  },

  render: function() {
    return (
      <div>
        <input className="search"
               type="text"
               onChange={this.valueChange}
               onKeyPress={this.keyPress}
               placeholder="search users"
               value={this.state.searchValue}/>
      </div>
    )
  }
});

module.exports = UserSearch;
