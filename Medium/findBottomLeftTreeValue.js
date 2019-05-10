var findBottomLeftValue = function(root) {
  var object1 = {};
  function recurse(start, level){
      if(object1[level]){
          object1[level].push(start.val)
      } else{
          object1[level] = [start.val]
      }
      if(start.left){
          recurse(start.left, level+1)
      }
      if(start.right){
          recurse(start.right, level+1)
      }
  }
  recurse(root, 0)
  var values =  Object.values(object1);
  values.reverse();

  return values[0][0];
    
};