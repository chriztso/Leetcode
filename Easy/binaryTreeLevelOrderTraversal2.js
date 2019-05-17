var levelOrderBottom = function(root) {
  if(!root){
    return [];
  }
  var object1 = {};
  funtion dfs(start, level){
    if(object1[level]){
      object1[level].push(start.val);
    } else{
      object1[level] = [start.val]
    }
    if(start.left){
      dfs(start.left, level+1)
    }
    if(start.right){
      dfs(start.right, level+1)
    }
  }

  dfs(root, 0);
  var answer = Object.values(object1);
  return answer.reverse();
  
};