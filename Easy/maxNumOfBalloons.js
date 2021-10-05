var maxNumberOfBalloons = function (text) {
    let balloon = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0
    }
    for (let i = 0; i < text.length; i++) {
        if (Object.keys(balloon).includes(text[i])) {
            balloon[text[i]]++
        }
    }
    let maxBalloons =
        Math.min(
            balloon['b'],
            balloon['a'],
            Math.floor(balloon['l'] / 2),
            Math.floor(balloon['o'] / 2),
            balloon['n']
        )
    return maxBalloons
};