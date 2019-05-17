var findMaxAverage = function(array, k) {
  var average; 
  var sum = 0;
  for(var i = 0; i < k; i++){
    sum +=array[i];
  }
  average = sum/k;
  for(var j = 0; j < array.length-k; j++){
    sum -= array[j];
    sum += array[j+k];
    if(sum/k > average){
      average = sum/k;
    }
  }

  return average;
  
}