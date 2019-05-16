var rotate = function(nums, k) {
  while(k !== 0){
    var temp = nums.pop();
    nums.unshift(temp);
    k--;
  }
  return nums;  
};