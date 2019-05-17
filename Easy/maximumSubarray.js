var maxSubArray = function(array) {
  if(array.every(function(x){return x < 0})){
    return Math.max(...array);
  }
  if(array.length === 1){
    return array[0];
  }
  var max = 0; 
  var current = 0; 
  for(var i = 0; i < array.length; i++){
    var current = array[i];
    if(current > max){
      max = current;
    }
    for(var j = 1; j < array.length; j++){
      current += array[i + j];
      if(current > max){
        max = current;
      }
    }
   }

 return max;
 
}
   