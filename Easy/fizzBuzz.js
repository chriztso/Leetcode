var fizzBuzz = function(n) {
  var array1 = [];
  for(var i = 1; i <= n; i++){
    if(i%3 === 0 && i%5===0 ){
      array1.push('FizzBuzz');
    }
    if(i%3===0 && i%5!==0){
      array1.push('Fizz')
    }
    if(i%5===0 && i%3!==0){
      array1.push('Buzz')
    }
    else if(i%3 !== 0 && i%5 !==0){
      array1.push('' + i)
    } 
  } 

  return array1;
 
};