var findSecondMinimumValue = function(root) {
  var nodes = [];
  var object1 ={};
  function recurse(start){
    nodes.push(start.val);
    if(start.right){
        recurse(start.right)
    }
    if(start.left){
        recurse(start.left)
    }
  }
  recurse(root);
  for(var i = 0; i < nodes.length; i++){
    if(object1[nodes[i]]){
        object1[nodes[i]]++;
    }
    else{
        object1[nodes[i]]=1;
    }
  }
  var values = Object.keys(object1).map(function(x){return Number(x)});
  if(values.length === 1){
    return -1
  }

  return values[1];
  
}