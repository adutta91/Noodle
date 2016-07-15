var React = require('react');

// FLUX
var SessionUtil = require('../../utils/sessionUtil');

// COMPONENTS
var Modal = require('boron/OutlineModal');
var LoginForm = require('./loginForm');

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

var LoginButton = React.createClass({

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
        <div className="button" onClick={this.showModal}>Login</div>
        <Modal ref="modal"
              contentStyle={contentStyle}
              modalStyle={modalStyle}
              backdropStyle={backdropStyle}>
          <LoginForm modalCallback={this.hideModal}/>
        </Modal>
      </div>
    )
  }
})

module.exports = LoginButton;
