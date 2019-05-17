var dominantIndex = function(array) {
  var max = Math.max(...array);
  var maxindex=  array.indexOf(max);
  array.splice(maxindex,1);
  for(var i = 0; i < array.length; i++){
    if(max <  2*(array[i])){
      return -1;
    }
  }

   return maxindex;
   
}