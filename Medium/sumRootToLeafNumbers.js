var sumNumbers = function(root) {
  if(!root){
      return [];
  }
  var total = 0;
  
  function recurse(start, array){
      var array = array.concat(start.val);
      if(!start.left && !start.right){
          total += Number(array.join(''));
          return;
      }
      if(start.left){
          recurse(start.left, array);
      }
      if(start.right){
          recurse(start.right, array);
      }
  }
  recurse(root, []);
  return total;
};