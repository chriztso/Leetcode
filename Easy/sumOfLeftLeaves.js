var sumOfLeftLeaves = function(root) {
  if(!root){
    return 0;
  }
  var total = 0; 
  function recurse(start){
    if(start.left){
      if(!start.left.left && !start.left.right ){
        total+=start.left.val;
      }    
      recurse(start.left)
    }
    if(start.right){
      recurse(start.right)
    }
  }
 recurse(root);
 return total;
};