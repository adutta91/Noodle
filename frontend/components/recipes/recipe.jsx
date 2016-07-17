var React = require('react');

var Recipe = React.createClass({

  _onClick: function() {
    window.open(
      this.props.recipe.url,
      '_blank'
    )
  },

  displayRecipe: function() {
    var recipe = this.props.recipe;
    return (
      <div>{recipe.title}</div>
    );
  },

  render: function() {
    return (
      <div className="recipe" onClick={this._onClick}>
        {this.displayRecipe()}
      </div>
    )
  }
})

module.exports = Recipe;
