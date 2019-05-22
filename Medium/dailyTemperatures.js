var dailyTemperatures = function(array) {
  var differences = [];
  
  for(var i = 0; i < array.length; i++){
    var count  = 0;
    var status = false;
    for(var j = i + 1; j < array.length; j++){
      if(array[j] > array[i]){
        var diff = j - i;
        differences.push(diff);
        status = true;
        break;
      }
      if(j === array.length-1 && status === false){
        differences.push(0)
      } 
    }
  }

  differences.push(0);
  return differences;

}