var binaryTreePaths = function (root) {
  var paths = [];
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val.toString()]
  }
  function recurse(start, combo) {
    if (!start.left && !start.right) {
      paths.push(combo);
      return;
    }
    if (start.left) {
      recurse(start.left, combo.concat(start.left.val));
    }
    if (start.right) {
      recurse(start.right, combo.concat(start.right.val));
    }
  }
  recurse(root, [root.val]);
  paths = paths.map(function (x) { return x.join('->') })
  return paths;
};

//2nd solution
var binaryTreePaths = function (root) {
  let paths = []
  function traverse(node, nodes) {
    if (!node.left && !node.right) {
      let path = nodes.join('->')
      paths.push(path)
    }
    if (node.left) {
      traverse(node.left, [...nodes, node.left.val])
    }
    if (node.right) {
      traverse(node.right, [...nodes, node.right.val])
    }
  }
  traverse(root, [root.val])
  return paths
};