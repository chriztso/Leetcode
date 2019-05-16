var checkPerfectNumber = function(num) {
  if(num == 1){
    return false;
  }
  var divisors = [1];
  for(var i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      var div = num/i; 
      divisors.push(div, i);
    }
  }

  return divisors.reduce(function(a,b){return a+b}) === num;

}