var postorderTraversal = function(root) {
  if(!root){
    return []
  }
  var array = []; 
  function recurse(start){
    if(start.left){
      recurse(start.left)
    }
    if(start.right){
      recurse(start.right)
    }
    array.push(start.val)
  }

  recurse(root);
  return array;
  
};