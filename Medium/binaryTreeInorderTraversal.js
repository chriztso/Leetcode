var inorderTraversal = function(root) {
  if(!root){
      return []
  }
  var array = []; 
  function recurse(start){
      if(start.left){
          recurse(start.left);
      }
      array.push(start.val);
      if(start.right){
          recurse(start.right)
      }
  }
  recurse(root)
  return array;  
};