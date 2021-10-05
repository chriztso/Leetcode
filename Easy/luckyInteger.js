var findLucky = function (arr) {
    let counts = {}
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] ? counts[arr[i]]++ : counts[arr[i]] = 1
    }
    let luckyInts = Object.entries(counts)
                          .filter(arr => Number(arr[0]) === arr[1])
                          .sort((a, b) => b[0] - a[0])
    return luckyInts.length > 0 ? luckyInts[0][1] : -1
};