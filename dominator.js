const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let element = {};
  let flatRoot = flattenTreeToArray(root);
  _.each(flatRoot, function (idTag) {
    if (root.id === id) {
      element.id === id;
      element.textContent = root.textContent;      
    } 
  });
  return element;
};

const getElementsByClassName = function(root, className) {
  // Your code here
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
