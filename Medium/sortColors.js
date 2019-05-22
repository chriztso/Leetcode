var sortColors = function(nums) {
  for(var z = 0; z < nums.length; z++){
    if(nums[z] === 1){
      nums.splice(z, 1);
      nums.unshift(1)
    }
  }  
  for(var i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      nums.splice(i, 1);
      nums.unshift(0)
    }
  }
  
  return nums;  
  
};