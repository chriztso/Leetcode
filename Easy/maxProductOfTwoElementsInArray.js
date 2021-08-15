var maxProduct = function(nums) {
    let sortedNums = nums.sort((a,b) => {return a-b})
    return ((sortedNums[sortedNums.length-1]) - 1) * (sortedNums[sortedNums.length-2] -1)
};