var isValidBST = function(root) {
  if(!root){
    return null;
  }
  var nodes = [];
  function inOrder(start){
    if(start.left){
      inOrder(start.left);
    }
    nodes.push(start.val);
    if(start.right){
      inOrder(start.right);
    }
  }
  inOrder(root);
  var status = true;
  for(var i = 0; i < nodes.length; i++){
    if(nodes[i] >= nodes[i+1]){
      status = false;
    }
  }
  return status;
}