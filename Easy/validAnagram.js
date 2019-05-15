var isAnagram = function(s, t) {
  var object1 = {};
  var object2 = {};
  for(var i =0; i < s.length; i++){
    if(object1[s[i]]){
      object1[s[i]]++;
    }
    else{
      object1[s[i]] =1;
    }
  }
  for(var i =0; i < t.length; i++){
    if(object2[t[i]]){
      object2[t[i]]++;
    }
    else{
      object2[t[i]] =1;
    }
  }
    
  var object1keys= Object.keys(object1);
  var object2keys= Object.keys(object2);
  if(object1keys.length !== object2keys.length){
      return false;
  }
  for(var keys in object1){
    if(object1[keys] !== object2[keys]){
      return false;
    }
  }
  return true;
}