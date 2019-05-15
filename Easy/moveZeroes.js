var moveZeroes = function(array) {
  var count = 0;
  
  for(var i = 0; i < array.length; i++){
    if(array[i] === 0){
      count++;
      array.splice(i, 1);
      i = -1;
    }
  }
  for(var i = 0; i < count; i++){
    array.push(0);
  }
  return array;
}