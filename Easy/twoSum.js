var twoSum = function(array, num) {
  var indexes = [];
  for(var i = 0; i < array.length; i++){
    for(var j = i+1; j < array.length; j++){
      if(array[i] + array[j] === num){
        indexes.push(i,j);
      }
    }
  }

  return indexes;
  
}