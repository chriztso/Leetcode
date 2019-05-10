var preorderTraversal = function(root) {
  if(!root){
      return []
  }
  var array = [];
  function recurse(start){
      array.push(start.val);
      if(start.left){
          recurse(start.left)
      }
      if(start.right){
          recurse(start.right)
      }
  }
  recurse(root);
  return array
};