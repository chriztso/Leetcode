var rightSideView = function(root) {
  if(!root){
      return [];
  }
  var object1 = {};
  var answer = []
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
  recurse(root, 0);
  for(var keys in object1){
      answer.push(object1[keys][object1[keys].length-1])
  }

  return answer;    
};