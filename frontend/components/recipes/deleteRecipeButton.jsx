var React = require('react');

// FLUX
var RecipeUtil = require('../../utils/recipeUtil');
var SessionStore = require('../../stores/sessionStore');

var DeleteRecipeButton = React.createClass({

  deleteRecipe: function(event) {
    event.preventDefault();
    RecipeUtil.deleteRecipe(this.props.recipeId, SessionStore.user().id);
  },

  render: function() {
    return (
      <div className="deleteRecipe">
        <div className="button" onClick={this.deleteRecipe}>X</div>
      </div>
    )
  }
});

module.exports = DeleteRecipeButton;
