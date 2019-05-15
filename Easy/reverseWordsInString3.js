var reverseWords = function(string) {
  var array1 = string.split(' ').filter(function(x){return x !== ' '});
  array1 = array1.map(function(x){return x.split('').reverse().join('')});
  return array1.join(' ')  
}