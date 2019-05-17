var removeDuplicates = function(array) {
  for(var i = 0; i < array.length; i++){
    if(array[i] === array[i + 1]){
      array.splice(i,1);
      i = -1;
    }
  }

  return array.length;
  
}