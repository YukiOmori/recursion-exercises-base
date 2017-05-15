  const _ = require('underscore'); // the real one! :)

  // This is what you would do if you liked things to be easy:
  // const stringify = JSON.stringify;
  // But you don't. So you're going to write it from scratch...


  const addDoubleQuatationToString = function (str) {
    if (typeof str === 'string') {
      return '\"' + str + '\"';
    } else {
      return str;
    }
  };

  const arrWithNoElement = function (arr) {
    return Array.isArray(arr) && arr.length === 0;
  };

  const objWithNoPropety = function (obj) {
    return typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0;
  };

  const isNotObject = function (obj) {
    return typeof obj !== 'object';
  };

  const isBaseCase = function (obj) {
    return obj === null || isNotObject(obj) || arrWithNoElement(obj) || objWithNoPropety(obj);
  };

  const stringify = function(obj) {
    let resultString = '';
    let count = 0;
   
    if (isBaseCase(obj)) {
      if (obj === null) {
        resultString += obj;
      } else if (arrWithNoElement(obj)) {
        resultString += '[]';
      } else if (objWithNoPropety(obj)) {
        resultString += '{}';
      } else {
        resultString += addDoubleQuatationToString(obj);
      }
      return resultString; 
    } else {
      _.each(obj, function (value, indexOrKey, iteratedObj) {
        if (Array.isArray(iteratedObj)) {
          if (count === 0) {
            let addedString = stringify(value);
            resultString += '[' + addedString;
          } else {
            let addedString = stringify(value);
            resultString += ',' + addedString;
          } 
          count ++;
          if (arrWithNoElement(iteratedObj) || count === iteratedObj.length) {
            resultString += ']';
          }
        } else {
          if (count === 0) {
            let addedString = stringify(value);
            resultString += '{' + addDoubleQuatationToString(indexOrKey) + ':' + addedString;
          } else {
            let addedString = stringify(value);
            resultString += ',' + addDoubleQuatationToString(indexOrKey) + ':' + addedString;
          } 
          count ++;
          if (count === Object.keys(iteratedObj).length) {
            resultString += '}';
          }
        }
      });
      return resultString;
    }

  };

  module.exports = {
    stringify: stringify
  };