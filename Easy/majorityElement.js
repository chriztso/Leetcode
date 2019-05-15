var majorityElement = function(array) {
  var object1 = {};
  for(var i = 0; i < array.length; i++){
    if(object1[array[i]]){
      object1[array[i]]++;
    }
    else{
      object1[array[i]] = 1;
    }
  }
  for(var keys in object1){
    if(object1[keys] > array.length/2){
      return Number(keys);
    }
  }
}