var largestValues = function(root) {
  if(root === null){
    return [];
  }
  var store = [];
  var object1 = {};
  var maxes = [];
  function recurse(start, level){
  store.push({value: start.val, row : level });
    if(!object1[level]){
        object1[level] = [];
    }
    if(start.right){
      recurse(start.right, level+1);
    }
    if(start.left){
      recurse(start.left, level+1);
    }
  }
  recurse(root, 0);
  for(var i = 0; i < store.length; i++){
    object1[store[i].row].push(store[i].value);
  }
  for(var keys in object1){
    var max =  Math.max(...object1[keys]);
    maxes.push(max);
  }
  
 return maxes;
}