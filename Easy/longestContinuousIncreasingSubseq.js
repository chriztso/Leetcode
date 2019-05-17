var findLengthOfLCIS = function(array) {
  var longest = 1;
  var current = 1;
  if(array.length === 0){
    return 0;
  }
  for(var i = 0; i < array.length; i++){
    if(array[i] < array[i+1]){
      current++;
      if(current > longest){
      longest = current;
      }
    }
    else{
      current = 1;
    }
  }

  return longest;
  
}   