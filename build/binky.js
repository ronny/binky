(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var EditableFrame = React.createClass({displayName: 'EditableFrame',
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
      React.DOM.iframe( {seamless:"true", frameBorder:"0", contentEditable:"true"} )
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

},{}],2:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var Toolbar = require('./toolbar.jsx');
var EditableFrame = require('./editableFrame.jsx');

var Editor = React.createClass({displayName: 'Editor',
  render: function() {
    return (
      React.DOM.div(null, 
        Toolbar(null ),
        EditableFrame( {textarea:this.props.textarea} )
      )
    );
  }
});

module.exports = Editor;

},{"./editableFrame.jsx":1,"./toolbar.jsx":3}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var Toolbar = React.createClass({displayName: 'Toolbar',
  render: function() {
    return (
      React.DOM.div(null, "Toolbar")
    );
  }
});

module.exports = Toolbar;

},{}],4:[function(require,module,exports){
var Binky = {};

Binky.Editor = require('./components/editor.jsx');

if (!module) {
  module.exports = Binky;
} else {
  window.Binky = Binky;
}

},{"./components/editor.jsx":2}]},{},[4])