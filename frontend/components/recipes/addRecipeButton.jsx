var React = require('react');

// COMPONENTS
var Modal = require('boron/OutlineModal');
var AddRecipeForm = require('./addRecipeForm');

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

var AddRecipeButton = React.createClass({

  getInitialState: function() {
    return ({
      open: false
    });
  },

  showModal: function() {
    this.refs.modal.show();
    this.setState({ open: true });
  },

  hideModal: function() {
    this.refs.modal.hide();
    this.setState({ open: false });
  },

  render: function() {
    return (
      <div className="addRecipe flexRow">
        <div className="button" onClick={this.showModal}>Add Recipe</div>
        <Modal ref="modal"
              contentStyle={contentStyle}
              modalStyle={modalStyle}
              backdropStyle={backdropStyle}>
          <AddRecipeForm modalCallback={this.hideModal} />
        </Modal>
      </div>
    )
  }
})

module.exports = AddRecipeButton;
