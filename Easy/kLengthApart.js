var kLengthApart = function (nums, k) {
    let indexes = []
    for (let i = 0; i < nums.length; i++) {
        if (indexes.length !== 0 && nums[i] === 1) {
            let lastIndex = indexes[indexes.length - 1]
            if (i - lastIndex <= k) {
                return false
            }
        }
        if (nums[i] === 1) {
            indexes.push(i)
        }
    }
    return true
};