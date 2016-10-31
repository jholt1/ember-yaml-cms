/* jshint node: true */
'use strict';

var treeForPublicHook = require('./lib/tree-for-public');

module.exports = {
  name: 'ember-yaml-cms',
  treeForPublic: treeForPublicHook,
};
