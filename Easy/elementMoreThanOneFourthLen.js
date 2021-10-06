var findSpecialInteger = function (arr) {
    let currCount = 1
    let currNum = arr[0]
    if (currCount > arr.length / 4) {
        return currNum
    }
    for (let i = 1; i < arr.length; i++) {
        if (currCount > arr.length / 4) {
            return currNum
        }
        if (arr[i] !== currNum) {
            currNum = arr[i]
            currCount = 1
        } else {
            currCount++
        }
    }
    return currNum
};