var React = require('react');

var Recipe = React.createClass({

  getInitialState: function() {
    return ({
      recipe: this.props.recipe
    });
  },

  render: function() {
    return (
      <div>
        This is a recipe
      </div>
    )
  }
})

module.exports = Recipe;
