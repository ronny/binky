var Binky = {};

Binky.Editor = require('./components/editor.jsx');

if (!module) {
  module.exports = Binky;
} else {
  window.Binky = Binky;
}
