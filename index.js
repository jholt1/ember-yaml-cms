'use strict';

var treeForPublicHook = require('./lib/tree-for-public');

module.exports = {
  name: 'ember-yaml-cms',
  treeForPublic: treeForPublicHook,
  included(app) {
    this._super.included.apply(this, arguments);
    this.app = app;
    this.addonConfig = app.options['ember-yaml-cms'] || {};
  }
};
