var averageOfLevels = function(root) {
  var averages = [];
  if(!root){
      return [];
  }
  var object1 = {};
  function dfs(start, level){
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
  for(var i = 0;  i < answer.length; i++){
    var sum = answer[i].reduce(function(a,b){return a +b});
    averages.push(sum/answer[i].length)
  }

  return averages;

};