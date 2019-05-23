var isSameTree = function(p, q) {
  var status = true;
  function traverse(start1, start2){
    if(!start1 && start2){
      status = false;
      return;
    }
    if(start1 && !start2){
      status = false;
      return;
    }
    if(!start1 && !start2){
      return;
    }
    if(start1.val !== start2.val){
      status = false;
    }
    traverse(start1.left, start2.left);
    traverse(start1.right, start2.right);
  }
  traverse(p,q);
  return status;
};