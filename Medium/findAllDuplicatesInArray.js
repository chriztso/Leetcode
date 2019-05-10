var findDuplicates = function(nums) {
  var doubles = [];
  nums.sort(); 
  for(var i = 0; i < nums.length; i++){
    if(nums[i] === nums[i+1]){
      doubles.push(nums[i]);
    }
  }
  
  return doubles;
};