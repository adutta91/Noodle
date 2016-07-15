var React = require('react');

// COMPONENTS
var Modal = require('boron/OutlineModal');
var SignUpForm = require('./signUpForm');

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


var SignUpButton = React.createClass({

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
      <div>
        <div className="button" onClick={this.showModal}>Sign Up</div>
        <Modal ref="modal"
              contentStyle={contentStyle}
              modalStyle={modalStyle}
              backdropStyle={backdropStyle}>
          <SignUpForm modalCallback={this.hideModal}/>
        </Modal>
      </div>
    )
  }
});

module.exports = SignUpButton;
