var searchBST = function(root, val) {
  var nodes = [];
  function dfs(start){
    if(start.val === val){
      nodes.push(start)
    }
    if(start.right){
      dfs(start.right)
    }
    if(start.left){
      dfs(start.left)
    }
  }

  dfs(root);
  return nodes.length === 0 ? null : nodes[0]

};