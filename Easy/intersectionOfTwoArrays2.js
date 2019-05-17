var intersect = function(array1, array2) {
  var object1 = {};
  var object2 = {};
  var array3 = [];
  for(var i = 0; i < array1.length; i++){
    if(object1[array1[i]]){
      object1[array1[i]]++;
    }
    else{
      object1[array1[i]] =1;
    }
  }
  for(var i = 0; i < array2.length; i++){
    if(object2[array2[i]]){
      object2[array2[i]]++;
    }
    else{
      object2[array2[i]] =1;
    }
  }
  console.log(object1, object2);
  for(var keys in object1){
    if(object2[keys]){
      console.log(keys);
      var min = Math.min(object1[keys], object2[keys]);
      while(min !== 0){
        array3.push(Number(keys));
        min--;
      }
    }
  }
  return array3;
}