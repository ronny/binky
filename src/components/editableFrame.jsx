/**
 * @jsx React.DOM
 */

var EditableFrame = React.createClass({
  componentDidMount: function(iframe) {
    setTimeout(function() {
      var body = iframe.contentDocument.body;
      body.contentEditable = true
      body.onchange = this.handleChange;
      body.onkeyup = this.handleKeyUp;
      body.innerHTML = this.rawHTML();
    }.bind(this), 0);
  },
  render: function() {
    return (
      // React doesn't yet support `sandbox` property,
      // e.g. sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      <iframe seamless="true" frameBorder="0" contentEditable="true" />
    );
  },
  handleChange: function(e) {
    this.updateTextarea();
  },
  handleKeyUp: function(e) {
    this.updateTextarea();
  },
  updateTextarea: function() {
    var iframe = this.getDOMNode();
    var body = iframe.contentDocument.body;
    this.props.textarea.innerHTML = body.innerHTML;
  },
  rawHTML: function() {
    return this.props.textarea.childNodes[0].nodeValue;
  }
});

module.exports = EditableFrame;
