var React = require('react');

var Frame = React.createClass({

  componentDidMount: function() {
    document.domain = document.domain;
  },

  render: function() {
    return (
      <div className="thumbWrapper" onClick={this.preventAction}>
        <iframe className="thumbnail" src={this.props.url}/>
      </div>
    )
  }
});

module.exports = Frame;
