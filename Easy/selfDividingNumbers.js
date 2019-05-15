var selfDividingNumbers = function(a,b) {
  var numbers = [];
  for(var i = a; i <= b; i++){
    var digits = i.toString().split('');
    var count = 0;
    for(var j = 0; j < digits.length; j++){
      if(i % Number(digits[j]) === 0){
        count++;
        console.log(count);
      }
    }
    if(count === digits.length){
      numbers.push(i);
    }
    count = 0;
  }

  return numbers;

}  