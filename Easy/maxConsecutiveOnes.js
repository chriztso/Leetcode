var findMaxConsecutiveOnes = function(array) {
  if(array.every(function(x){return x === 0})){
    return 0;
  }
  var max = 1;
  var curr = 1;
  for(var i = 0; i < array.length; i++){
    if(array[i] === 1 && array[i+1] === 1){
      curr++;
      if(curr > max){
        max = curr;
      }
    }
    else{
      curr = 1;
    }
  }
  
  return max;

}