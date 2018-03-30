/* jshint node: true */
'use strict';

const MergeTrees = require('broccoli-merge-trees');

module.exports = function merge() {
  const args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  const trees = args.filter(tree => tree);

  return new MergeTrees(trees);
};
