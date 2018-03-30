/* jshint node: true */
'use strict';

const Funnel = require('broccoli-funnel');
const merge = require('./merge');
const yaml2json = require('broccoli-yaml');
const mergeJSON = require('broccoli-merge-json');
const mkdirp = require('mkdirp');

const folderIsValid = (name) => {
  if (!name) {
    return false;
  }

  if (/^[\w.-]+$/.test(name)) {
    return true;
  }

  throw 'CMS folder name is not valid. Do not use spaces or special characters.';
}

module.exports = function treeForPublic(tree) {
  const name = folderIsValid(this.addonConfig.folder) ? this.addonConfig.folder : 'cms';
  mkdirp.sync(name);

  const data = new Funnel(name, {allowEmpty: false});
  const cms = yaml2json(data, { spaces: 2 });
  const content = new Funnel(cms, { destDir: 'assets/cmsjson/content' });

  const cmsjson = mergeJSON(content, {
    srcDir: 'assets/cmsjson',
    destDir: `assets/${name}`
  });

  return merge(tree, cmsjson);
};
