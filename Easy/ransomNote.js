var canConstruct = function(string1, string2) {
  if(string1.length === 1 && string2.length ===0){
    return false;
  }
  if((string1.length === 1 && string2.length === 1) && string1 !== string2){
    return false;
  }
  var object1 = {};
  var object2 = {};
  for(var i = 0; i < string1.length; i++){
    if(object1[string1[i]]){
      object1[string1[i]]++;
    }
    else{
      object1[string1[i]] = 1;
    }
  }
  for(var i = 0; i < string2.length; i++){
    if(object2[string2[i]]){
      object2[string2[i]]++;
    }
    else{
      object2[string2[i]] = 1;
    }
  }

  for(var keys in object1){
    if(object2[keys] && object2[keys] >= object1[keys]){
      delete object1[keys];
    }
  }
  var object1Keys = Object.keys(object1);
  return object1Keys.length === 0;

}