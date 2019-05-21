var letterCombinations = function(digits) {
  if(digits.length === 0){
    return [];
  }
  var letters = {
    2 : ['a', 'b', 'c'],
    3 : ['d', 'e', 'f'],
    4 : ['g', 'h', 'i'],
    5 : ['j', 'k', 'l'],
    6 : ['m', 'n', 'o'],
    7 : ['p', 'q', 'r', 's'],
    8 : ['t', 'u', 'v'],
    9 : ['w', 'x', 'y', 'z'],
  }
  var combos = [];
  function recurse(store, index){
    if(index === digits.length){
      combos.push(store.join(''));
      return;
    }
    for(var i = 0; i < letters[digits[index]].length; i++){
      recurse(store.concat(letters[digits[index]][i]), index+1);
    }
  }
  recurse([], 0);
  return combos;
}