var subarraySum = function(array, k) {
  var count = 0; 
   for(var i = 0; i < array.length; i++){
     var sum = array[i];
     if(sum === k){
         count++;
     }
     for(var j = 1; j < array.length; j++){
       sum += array[i+j];
       if(sum === k){
         count++;
       }
     }
   }
  return count;
}