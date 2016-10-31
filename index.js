/* jshint node: true */
'use strict';

var treeForPublicHook = require('./lib/tree-for-public');

module.exports = {
  name: 'ember-yaml-cms',
  treeForPublic: treeForPublicHook,

  treeForVendor: function() {
    var np = this.project.nodeModulesPath;
    return np + '/ember-yaml-cms/vendor';
  },

  included: function(app) {
    app.include('vendor/my-component.css');
  }

};
