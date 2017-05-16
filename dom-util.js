const visitAllNodes = function(node, callback) {
  if (node.childNodes) {
  //base case以外
    //子ノードの各要素対してvisitAllnodes
    node.childNodes.forEach((childNode) => {
      visitAllNodes(childNode, callback);
    });    
  callback(node);
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  let flatArray = [];
  visitAllNodes(node, (currentNode) => {
    flatArray.push(currentNode);
  });
  return flatArray;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};