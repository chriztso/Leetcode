var sumOfUnique = function (nums) {
    let numCounts = {}
    for (let i = 0; i < nums.length; i++) {
        if (numCounts[nums[i]]) {
            numCounts[nums[i]]++
        } else {
            numCounts[nums[i]] = 1
        }
    }
    let sum = 0;
    for (let num in numCounts) {
        if (numCounts[num] === 1) {
            sum += Number(num)
        }
    }
    return sum
};