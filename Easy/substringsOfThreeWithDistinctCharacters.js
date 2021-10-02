const countGoodSubstrings = (s) => {
    let goodStrs = 0
    for(i = 0; i < s.length-2; i++){
        let nextLetter = s[i+1]
        let afterNextLetter = s[i+2]
        if(s[i] !== nextLetter && s[i] !== afterNextLetter && nextLetter !== afterNextLetter){
            goodStrs++
        }
    }
    return goodStrs
};