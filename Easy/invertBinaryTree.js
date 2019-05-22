var invertTree = function(root) {
  if(!root){
    return null;
  }
  var root2 = new TreeNode(root.val);
  function recurse(start, copy){
    if(!start.left && !start.right){
      return;
    }
    if(start.left){
      copy.right = new TreeNode(start.left.val);
      recurse(start.left, copy.right);
    }
    if(start.right){
      copy.left = new TreeNode(start.right.val);
      recurse(start.right, copy.left);
    }
  }

  recurse(root, root2);
  return root2;
  
};