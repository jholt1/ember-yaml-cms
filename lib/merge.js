/* jshint node: true */
'use strict';

var MergeTrees = require('broccoli-merge-trees');

module.exports = function merge() {
  var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  var trees = [];

  args.forEach(function (tree) {
    if (tree) {
      trees.push(tree);
    }
  });

  return new MergeTrees(trees);
};
