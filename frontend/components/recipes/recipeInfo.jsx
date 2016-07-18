var React = require('react');

// FLUX
var RecipeStore = require('../../stores/recipeStore');

// COMPONENTS
var DeleteRecipeButton = require('./deleteRecipeButton');

var RecipeInfo = React.createClass({

  getInitialState: function() {
    return ({
      recipe: RecipeStore.findById(this.props.recipeId)
    });
  },

  componentDidMount: function() {
    this.recipeListener = RecipeStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.recipeListener.remove();
  },

  update: function() {
    this.setState({ recipe: RecipeStore.findById(this.state.recipeId) });
  },

  openLink: function() {
    window.open(
      this.state.recipe.url,
      '_blank'
    )
  },

  displayRecipe: function() {
    var recipe = this.state.recipe;
    if (recipe) {
      return (
        <div className="recipeInfo flexColumn">
          {recipe.title}
          <p>{recipe.description}</p>
          <div className="links flexRow">
            <div className="openLink icon" onClick={this.openLink}>Go!</div>
            <DeleteRecipeButton onClick={this.props.modalCallback} recipeId={recipe.id} />
          </div>
        </div>
      )
    } else {
      return (<div />)
    }
  },

  render: function() {
    return (
      <div>
        {this.displayRecipe()}
      </div>
    )
  }
});

module.exports = RecipeInfo;
