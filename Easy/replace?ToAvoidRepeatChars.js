var modifyString = function (s) {
    //case 1: ? at front - check what next is
    //case 2: between 2 letters - check before and after
    //case 3: ? at end - check prior
    const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let chars = s.split('')
    for (let i = 0; i < chars.length; i++) {
        if (i === 0 && chars[i] === '?') {
            let nextCharIndex = alpha.indexOf(chars[i + 1])
            let charToReplaceWith = alpha[nextCharIndex + 1]
            chars[i] = charToReplaceWith
        } else if (i === chars.length - 1 && chars[i] === '?') {
            let prevCharIndex = alpha.indexOf(chars[i - 1])
            let charToReplaceWith = alpha[prevCharIndex + 1]
            chars[i] = charToReplaceWith
        } else if (chars[i] === '?') {
            let prevCharIndex = alpha.indexOf(chars[i - 1])
            let nextCharIndex = alpha.indexOf(chars[i + 1])
            console.log(prevCharIndex)
            console.log(nextCharIndex)
            let indexes = []
            for (let i = 0; i < 26; i++) {
                indexes.push(i)
            }
            indexes = indexes.filter(index => index !== prevCharIndex && index !== nextCharIndex)
            let randomIndex = indexes[Math.floor(Math.random() * indexes.length)];
            let charToReplaceWith = alpha[randomIndex]
            chars[i] = charToReplaceWith
        }
    }
    return chars.join('')
};