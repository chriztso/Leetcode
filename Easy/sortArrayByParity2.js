var sortArrayByParityII = function(array) {  
  var evens = array.filter(function(x){return x % 2 === 0});
  var odds = array.filter(function(x){return x % 2 !== 0});
  var numbers = evens.concat(odds);
  console.log(numbers);
  var all = [];
  while(numbers.length !== 0){
    all.push(numbers[0]);
    all.push(numbers[numbers.length-1]);
    numbers.shift();
    numbers.pop();
  }

  return all;

}