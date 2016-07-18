var React = require('react');

var UserSearch = React.createClass({

  getInitialState: function() {
    return ({
      searchValue: ""
    });
  },

  keyPress: function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
      console.log("search!!!! " + this.state.searchValue );
    } else {
      this.setState({ searchValue: this.state.searchValue + event.key });
    }
  },

  render: function() {
    return (
      <div>
        <input className="search"
               type="text"
               onKeyPress={this.keyPress}
               placeholder="search users"
               value={this.state.searchValue}/>
      </div>
    )
  }
});

module.exports = UserSearch;
