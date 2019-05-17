var isHappy = function(number) {
  while(number > 6){
    number = number.toString().split('').map(function(x){return Number(x) * Number(x)});
    number = number.reduce(function(a,b){return a+b});
  }
    
  return number === 1 ? true: false;
  
}  