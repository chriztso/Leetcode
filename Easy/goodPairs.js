var numIdenticalPairs = function (nums) {
    let pairs = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                pairs.push([j, i])
            }
        }
    }
    return pairs.length
}