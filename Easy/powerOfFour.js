var isPowerOfFour = function(num) {
  if(num === 0){
    return false;
  }
  while(num % 4 ===0){
    num = num/4;
  }

return num ===1;

}