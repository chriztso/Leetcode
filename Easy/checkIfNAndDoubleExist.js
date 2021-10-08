var checkIfExist = function (arr) {
    let nums = {}
    for (let i = 0; i < arr.length; i++) {
        nums[arr[i]] = i
    }
    for (let i = 0; i < arr.length; i++) {
        let twiceNumber = arr[i] * 2
        let halfNumber = arr[i] / 2
        if ((nums[twiceNumber] || nums[halfNumber]) && (i !== nums[twiceNumber] && i !== nums[halfNumber])) {
            return true
        }
    }
    return false
};