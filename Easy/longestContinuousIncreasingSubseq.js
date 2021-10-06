var findLengthOfLCIS = function (array) {
  var longest = 1;
  var current = 1;
  if (array.length === 0) {
    return 0;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      current++;
      if (current > longest) {
        longest = current;
      }
    }
    else {
      current = 1;
    }
  }

  return longest;

}

//2nd solution
var findLengthOfLCIS = function (nums) {
  let start = 0
  let maxLen = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      start = i
    }
    maxLen = Math.max(i - start + 1, maxLen)
  }
  return maxLen
};