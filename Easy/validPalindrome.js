var isPalindrome = function(string) {  
  var alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var letters =  string.split('');
  letters = letters.map(function(x){return x.toLowerCase()}).filter(function(x){return alpha.indexOf(x) !== -1}) ;
  return letters.slice().reverse().join('') === letters.join('');
}
  