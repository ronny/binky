/**
 * @jsx React.DOM
 */

var Toolbar = require('./toolbar.jsx');
var EditableFrame = require('./editableFrame.jsx');

var Editor = React.createClass({
  render: function() {
    return (
      <div>
        <Toolbar />
        <EditableFrame textarea={this.props.textarea} />
      </div>
    );
  }
});

module.exports = Editor;
