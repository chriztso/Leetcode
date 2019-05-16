var thirdMax = function(nums) {
  var object1 = {};
  for(var i = 0; i < nums.length; i++){
  if(object1[nums[i]]){
    object1[nums[i]]++;
  }
  else{
    object1[nums[i]]=1;
  }
  }
  var keys = Object.keys(object1).map(function(x){return Number(x)});
  keys.sort(function(a,b){return b-a});
  var max = keys.length >= 3 ? keys[2] : keys[0];
  return max;
};