var React = require('react');

// OBJECTS
var Urls = require('../../assets/urls');

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
      <div>
        <img src={Urls.trashIcon} className="deleteRecipe icon" onClick={this.deleteRecipe}/>
      </div>
    )
  }
});

module.exports = DeleteRecipeButton;
