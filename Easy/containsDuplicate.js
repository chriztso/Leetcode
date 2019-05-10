var containsDuplicate = function(nums) {
  var count = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
      count++;
    }
  }
  return count > 0 ? true:false;
};