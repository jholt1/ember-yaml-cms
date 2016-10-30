/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var merge = require('./merge');
var yaml2json = require('yaml2json');

module.exports = function treeForPublic(tree) {
  return merge(
    tree,
    new Funnel(
      yaml2json(
        new Funnel(
          {
            include: '**/*.yaml'
          }
        ),
        {
          space: 2
        }
      ),
      {
        destDir: '/assets/content'
      }
    )
  );
};
