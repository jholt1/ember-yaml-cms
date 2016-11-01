/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var merge = require('./merge');
var yaml2json = require('broccoli-yaml');
var mergeJSON = require('broccoli-merge-json');

module.exports = function treeForPublic(tree) {

  var cms = yaml2json(new Funnel('cms'), { spaces: 2 });

  var content = new Funnel(cms, { destDir: 'assets/cmsjson/content' });

  var cmsjson = mergeJSON(content, {
    srcDir: 'assets/cmsjson',
    destDir: 'assets/cms'
  });

  return merge(tree, cmsjson);

};
