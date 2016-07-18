var React = require('react');

// FLUX
var RecipeStore = require('../../stores/recipeStore');

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

  render: function() {
    return (
      <div className="recipeInfo flexColumn">
        {this.state.recipe.title}
        <div className="button" onClick={this.openLink}>Go!</div>
      </div>
    )
  }
});

module.exports = RecipeInfo;
