var countKDifference = function (nums, k) {
    let pairs = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[j] - nums[i]) === k) {
                pairs++
            }
        }
    }
    return pairs
};