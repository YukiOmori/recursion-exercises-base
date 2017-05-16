const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let element = null;
  let flatRoot = flattenTreeToArray(root);
  _.each(flatRoot, (node) => {
    if (node.id === id) {
      element = node;
    }
  });
  return element;
};


const containClassName = function (classNames, className) {
  let classNameExist = false;
  _.each(classNames, (value) => {
    classNameExist = classNameExist || value === className;
  });
  return classNameExist;
};

const getElementsByClassName = function(root, className) {
  let elements = [];
  let flatRoot = flattenTreeToArray(root);
  _.each(flatRoot, (node) => {
    if (node.className !== undefined) {
      let classNames = node.className.split(' ');    
      if (containClassName(classNames, className)) {
        elements.push(node);
      }
    }
  });
  return elements;
};

const getElementsByTagName = function(root, tagName) {
  let elements = [];
  let flatRoot = flattenTreeToArray(root);
  _.each(flatRoot, (node) => {
    if (node.tagName === tagName) {
      elements.push(node);
    }
  });
  return elements;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
