var isMonotonic = function(array) {
    var count1 = 1; 
    var count2 = 1; 
    for(var i = 0; i < array.length; i++){
      if(array[i] <= array[i+1]){
          count1++;
      } 
    }

    for(var j = 0; j < array.length; j++){
      if(array[j] >= array[j+1]){
          count2++;
      }
    }

  return count1 === array.length || count2 === array.length;
}