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
      console.log(resultString);
      return resultString; 
    } else {
      // console.log('not base case');
      _.each(obj, function (value, indexOrKey, iteratedObj) {
        // console.log('iterate over obj');
        if (Array.isArray(obj)) {
          // console.log('obj is array');
          if (count === 0) {
            // console.log('count 0');
            let addedString = stringify(value);
            resultString += '[' + addedString;
          } else {
            // console.log('count not 0');
            let addedString = stringify(value);
            resultString += ',' + addedString;
          } 
          count ++;
          if (arrWithNoElement(iteratedObj) || count === iteratedObj.length) {
            // console.log('end of obj');
            resultString += ']';
          }
        } else {
          if (count === 0) {
            let addedString = stringify(value);
            addedString = addDoubleQuatationToString(addedString);
            resultString += '{' + addDoubleQuatationToString(indexOrKey) + ': ' + addedString;
          } else {
            let addedString = stringify(value);
            addedString = addDoubleQuatationToString(addedString);
            resultString += ',' + addDoubleQuatationToString(indexOrKey) + ': ' + addedString;
          } 
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