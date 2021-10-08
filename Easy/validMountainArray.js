var validMountainArray = function (arr) {
    if (arr.length < 3) {
        return false
    }
    let flag = 'inc'
    let peak = 0
    for (let i = 0; i < arr.length; i++) {
        if (flag === 'inc') {
            if (arr[i + 1] === arr[i]) {
                return false
            }
            if (arr[i + 1] < arr[i]) {
                flag = 'dec'
                peak = i
            }
        } else {
            if (arr[i + 1] === arr[i] || arr[i + 1] > arr[i]) {
                return false
            }
        }
    }
    return flag === 'dec' && peak !== 0 ? true : false
};