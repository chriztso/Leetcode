var minDepth = function(root) {
  if(root === null){
    return null;
  }
  
  var countArray = []; 
  function recurse(start, count){
    if(start.right === null && start.left === null){
      countArray.push(count.length);
    }
    if(start.right){
      recurse(start.right, count.concat(start.right));
    }
    if(start.left){
      recurse(start.left, count.concat(start.left));
    }
  }
  
  recurse(root, [root]);
  return Math.min(...countArray)

};