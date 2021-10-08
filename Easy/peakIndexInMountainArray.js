var peakIndexInMountainArray = function (arr) {
    let peakIndex = 0
    let peakValue = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] > peakValue) {
            peakIndex = i + 1
            peakValue = arr[i + 1]
        } else {
            return peakIndex
        }
    }
};