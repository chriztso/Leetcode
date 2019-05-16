var lengthOfLastWord = function(string) {
  if(string === " "){
    return 0;
  }
  var words = string.split(' ').filter(function(x){return x !== " " &&  x!== ''});
  console.log(words)
  return words.length !== 0 ? words[words.length-1].length: 0;
};