var largeGroupPositions = function(array) {
  var stored = [];
  var index= 0; 
  var count = 0;
  for(var i = 0; i < array.length; i++){
    if(array[index] ===  array[i+1]){
      count++;
    }
    if(array[index] !== array[i+1]){
      if(count >= 2){
        stored.push([index, index+count]);
      }
      index = i+1; 
      count = 0;
    }
  }
  
  return stored;

}