var reverse = function(num) {
  if(num === 0){
    return 0;
  }
  if(num > 0){
    num = num.toString().split('').reverse().join('');
    num = Number(num);
    return num < 2147483647 ? num : 0;
  }

  if(num < 0){
    num *= -1;
    num = num.toString().split('').reverse().join('');
    num = Number(num);
    return num < 2147483647 ? num * -1 : 0;
  }
  
}