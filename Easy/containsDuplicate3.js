var containsNearbyAlmostDuplicate = function(nums, k, t) {
  var flag = false;
  for(var i = 0; i < nums.length; i++){
    for(var j = i + 1; j  < nums.length; j++){
      if((Math.abs(nums[i] - nums[j]) <= t) && Math.abs(i-j) <= k){
        flag = true;
      }
    }
  }
  return flag;
};