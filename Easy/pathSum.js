var hasPathSum = function(root, sum) {
  if(!root){
    return false;
  }
  var status = false;
  function recurse(start, sumOne){
    sumOne += start.val;
    if(start.right === null && start.left === null && sumOne === sum){
      status = true;
      return ;
    }
     if(start.right){
       recurse(start.right, sumOne)
     }
     if(start.left){
       recurse(start.left, sumOne)
     }  
  }
  
  recurse(root, 0);
  return status;
    
};