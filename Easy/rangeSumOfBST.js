var rangeSumBST = function(root, L, R) {
  var sum = 0;
  function inner(start){
    if(start.val >= L && start.val <= R){
      sum += start.val;  
    }
    if(start.left){
      inner(start.left);
    }
    if(start.right){
      inner(start.right);
    }
  }

  inner(root);
  return sum;

};