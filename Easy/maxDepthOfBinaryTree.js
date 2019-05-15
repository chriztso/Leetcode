var maxDepth = function(root) {
  if(!root){
    return []
  }
  var max  = 1;
  function recurse(start, combo ){ 
    if(start.right){
      recurse(start.right, combo.concat(start.right));
    }
    if(start.left){
      recurse(start.left, combo.concat(start.left));
    }
    if(start.left === null && start.right === null){
      if(combo.length > max){
          max = combo.length;
      }
    }
  }
  recurse(root, [root]);
  return max;  
};