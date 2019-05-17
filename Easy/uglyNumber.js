var isUgly = function(number) {   
  while(number && number % 2 === 0){
    number /= 2;
  }
  
  while(number && number % 3 === 0){
    number /= 3;
  }

  while(number && number % 5 === 0){
    number /= 5;
  }

  return number === 1;  

}
 