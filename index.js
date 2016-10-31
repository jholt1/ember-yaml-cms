/* jshint node: true */
'use strict';

var treeForPublicHook = require('./lib/tree-for-public');

included: function(app) {
  app.include('vendor/my-component.css');
}

module.exports = {
  name: 'ember-yaml-cms',
  treeForPublic: treeForPublicHook
};
