var containsNearbyDuplicate = function(array, k) {
  var object1 = {};
  for(var i = 0; i < array.length; i++){
    if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])){
      object1[array[i]] =[];
    }
  }
  var keys = Object.keys(object1);
  
  for(var i = 0; i < array.length; i++){
    if(keys.indexOf(array[i].toString())!== -1){
      object1[array[i]].push(i);
    }
  }
   
  for(var key in object1){
    for(var i = 0; i < object1[key].length; i++){
      for(var j = i+1; j < object1[key].length; j++){
        if(Math.abs(object1[key][i]-object1[key][j])===k || Math.abs(object1[key][i]-object1[key][j]) < k){
          return true;
        }
      }
    }
  }

   return false;
  
}