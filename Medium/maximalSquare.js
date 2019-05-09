var maximalSquare = function(array) {
    if(array.length === 0){
        return 0;
    }
  
  var maxLength = 0;
  var rows = array.length; 
  var columns = array[0].length; 
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < columns; j++){
      if(array[i][j] === '1'){
        var lengthOne = 1;
          var status = true;
      while(i + lengthOne < rows && j + lengthOne < columns && status){
          for(var z = i; z <= i + lengthOne; z++){
            for(var y = j; y <= j + lengthOne; y++){
              if(array[z][y] !== '1'){
                status = false;
                
              }
            }
          }
          if(status === true){
              lengthOne++;
          }
         }
         if(maxLength < lengthOne){
             maxLength = lengthOne;
         }
      }
    }
  }
  
  return maxLength * maxLength;
}