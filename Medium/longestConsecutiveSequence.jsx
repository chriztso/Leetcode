var longestConsecutive = function (nums) {
    const numSet = new Set(nums)
    let longest = 0
    numSet.forEach(num => {
        if (!numSet.has(num - 1)) {
            let currentNum = num
            let currentLen = 1
            while (numSet.has(currentNum + 1)) {
                currentNum++
                currentLen++
            }
            longest = Math.max(currentLen, longest)
        }
    })
    return longest
};