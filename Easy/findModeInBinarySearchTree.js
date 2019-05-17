var findMode = function(root) {
  if(!root){
    return [];
  }
  var nodes = [];
  var object1 = {}; 
  var nums = [];
  var returned = [];
  function recurse(start){
    nodes.push(start.val)
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
      object1[nodes[i]] =1;
    }
  }
  for(var keys in object1 ){
    nums.push([Number(keys), object1[keys]]);
  }
  nums.sort(function(a,b){return b[1] - a[1]});
  var max =  nums[0][1];
  for(var i = 0; i < nums.length; i++){
    if(nums[i][1] === max){
        returned.push(nums[i][0])
    }
  }

  return returned;
  
};