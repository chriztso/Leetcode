var singleNumber = function(array) {
  var object1 = {}; 
  var only;
  for(var i = 0; i < array.length; i++){
    if(object1[array[i]]){
      object1[array[i]]++;
    } else{
      object1[array[i]] =1;
    }
  }
     
  for(var keys in object1){
    if(object1[keys] === 1){
      only = Number(keys);
    }
  }
  
  return only;

}