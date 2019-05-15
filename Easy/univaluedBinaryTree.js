var isUnivalTree = function(root) {
  var nodes = [];
  function recurse(start){
    nodes.push(start.val);
    if(start.right){
        recurse(start.right)
    }
     if(start.left){
        recurse(start.left)
    }
  }
  recurse(root);

  return nodes.every(function(x){return x === nodes[0]});
    
};