var React = require('react');

// FLUX
var RecipeUtil = require('../../utils/recipeUtil');
var SessionStore = require('../../stores/sessionStore');

var AddRecipeForm = React.createClass({

  getInitialState: function() {
    return ({
      title: "",
      url: ""
    });
  },

  titleChange: function(event) {
    event.preventDefault();
    this.setState({ title: event.currentTarget.value});
  },

  urlChange: function(event) {
    event.preventDefault();
    this.setState({ url: event.currentTarget.value});
  },

  createRecipe: function(event) {
    event.preventDefault();
    var url = makeSafeUrl(this.state.url)
    var recipe = {
      recipe: {
        title: this.state.title,
        url: url,
        user_id: SessionStore.user().id
      }
    }
    RecipeUtil.createRecipe(recipe);
    this.props.modalCallback();
  },

  render: function() {
    return (
      <div className="addRecipe form">
        <input type='text' placeholder='title' value={this.state.title} onChange={this.titleChange}/>
        <input type='text' placeholder='url' value={this.state.url} onChange={this.urlChange}/>
        <div className='button' onClick={this.createRecipe}>Add</div>
      </div>
    )
  }
});

var makeSafeUrl = function(str) {
  var http = "http://";
  var https = "https:/";
  if (str.length > 7) {
    var prefix = str.slice(0, 7);
    if(prefix === http || prefix === https) {
      return str;
    } else {
      return http + str;
    }
  } else {
    return http + str
  }
};

module.exports = AddRecipeForm;
