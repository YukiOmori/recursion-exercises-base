
const visitAllNodes = function(node, callback) {
  if (node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
      visitAllNodes(node.childNodes[i], callback);
    }
  }
  callback(node);
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  let flattenArray = [];
  visitAllNodes(node, () => {
    flattenArray.push(node.size);
  });
  return flattenArray;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};