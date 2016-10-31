/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var merge = require('./merge');
var yaml2json = require('broccoli-yaml');

module.exports = function treeForPublic(tree) {
  return merge(
    tree,
    new Funnel(
      yaml2json(
        new Funnel(
          {
            include: '/cms/*.yaml'
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
