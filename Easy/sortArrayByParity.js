var sortArrayByParity = function(A) {
  var evens = A.filter(function(x){return x % 2 ===0});
  var odds = A.filter(function(x){return x % 2 !==0});
  var all = evens.concat(odds);
  return all;
};