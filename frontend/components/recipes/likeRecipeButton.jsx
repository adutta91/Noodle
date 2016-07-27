var React = require('react');

// FLUX
var SessionStore = require('../../stores/sessionStore');
var LikedRecipeStore = require('../../stores/likedRecipeStore');
var LikedRecipeUtil = require('../../utils/likedRecipeUtil');

var LikeRecipeButton = React.createClass({

  getInitialState: function() {
    return ({
      liked: LikedRecipeStore.isLiked(this.props.recipe.id)
    })
  },

  componentDidMount: function() {
    this.likedRecipeListener = LikedRecipeStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.likedRecipeListener.remove();
  },

  update: function() {
    this.setState({ liked: LikedRecipeStore.isLiked(this.props.recipe.id) });
  },

  displayButton: function() {
    if (this.state.liked) {
      return (
        "liked"
      )
    } else {
      return (
        "not liked"
      )
    }
  },

  buttonClicked: function(event) {
    event.stopPropagation();
    var recipeLike = {
      recipe_like: {
        user_id: SessionStore.user().id,
        recipe_id: this.props.recipe.id
      }
    };
    if (this.state.liked) {
      LikedRecipeUtil.unlikeRecipe(recipeLike);
    } else {
      LikedRecipeUtil.likeRecipe(recipeLike);
    }
    this.setState({ liked: !this.state.liked });
  },

  render: function() {
    return (
      <div onClick={this.buttonClicked}>
        { this.displayButton() }
      </div>
    )
  }
});

module.exports = LikeRecipeButton;
