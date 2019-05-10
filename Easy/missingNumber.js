var missingNumber = function(array) {
  var object1 = {};
  for(var i = 0; i < array.length + 1; i++){
    object1[i] = true;
  }
  for(var j = 0; j < array.length; j++){
    if(object1[array[j]]){
      delete object1[array[j]]
    }
  }

  return Number(Object.keys(object1));

}