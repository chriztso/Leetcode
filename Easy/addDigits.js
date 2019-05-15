var addDigits = function(num) {
  //make string and split into array, map into digits
  //reduce array
  //if number > 10, keep reducing
  //if not, return number
  if(num < 10){
    return num;
  }
  while(num >= 10){
  var digits = num.toString().split('').map(function(x){return Number(x)});
  var sum = digits.reduce(function(a,b){return a +b;});
    if(sum < 10){
      return sum;
    }
    else{
      num = sum;
    }
  }
};