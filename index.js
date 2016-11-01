/* jshint node: true */
'use strict';

var glob = require('glob');
var fs = require('fs');
var yaml = require('yamljs');
var writeFile = require('broccoli-file-creator');

var treeForPublicHook = require('./lib/tree-for-public');

module.exports = {
  name: 'ember-yaml-cms',
  treeForPublic: treeForPublicHook,
};
