var React = require('react');

// COMPONENTS
var MoreInfoButton = require('./moreInfoButton');

var Recipe = React.createClass({

  displayRecipe: function() {
    var recipe = this.props.recipe;
    return (
      <div>
        {recipe.title}
      </div>
    );
  },

  render: function() {
    return (
      <div className="recipe flexColumn">
        {this.displayRecipe()}
        <MoreInfoButton recipeId={this.props.recipe.id}/>
      </div>
    )
  }
})

module.exports = Recipe;
