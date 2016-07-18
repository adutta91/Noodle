var React = require('react');

// COMPONENTS
var RecipeInfo = require('./recipeInfo');
var Modal = require('boron/OutlineModal');

// OBJECTS
var Urls = require('../../assets/urls');

// MODAL STYLES
var modalStyle = {
  transform : 'inherit',
  width: '300px',
  transform: 'translate(-50%, -50%)',
  border: '1px solid black',
  borderRadius: '3px'
};

var backdropStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.2)'
};

var contentStyle = {
  height: '100%',
  padding: '20px'
};

var MoreInfoButton = React.createClass({

  getInitialState: function() {
    return ({
      open: false
    });
  },

  showModal: function(event) {
    event.preventDefault();
    event.stopPropagation()
    this.refs.modal.show();
    this.setState({ open: true });
  },

  hideModal: function() {
    this.refs.modal.hide();
    this.setState({ open: false });
  },

  render: function() {
    return (
      <div className="moreInfo">
        <img className="icon" src={Urls.noodleIcon} onClick={this.showModal} />
        <Modal ref="modal"
              contentStyle={contentStyle}
              modalStyle={modalStyle}
              backdropStyle={backdropStyle}>
          <RecipeInfo modalCallback={this.hideModal} recipeId={this.props.recipeId} />
        </Modal>
      </div>
    )
  }
});

module.exports = MoreInfoButton;
