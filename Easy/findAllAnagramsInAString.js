var findAnagrams = function(string1, string2) {
  var object1 = {};
  var object2 = {};
  var indexes = [];
  var k = string2.length;
  for(var i = 0; i < string2.length; i++){
    if(object1[string2[i]]){
      object1[string2[i]]++;
    }
    else{
      object1[string2[i]]=1;
    }
  }
  
  for(var i = 0; i < k; i++){
    if(object2[string1[i]]){
      object2[string1[i]]++;
    }
    else{
      object2[string1[i]]=1;
    }
    var count = 0;  
    for(var keys in object2){
      if(object1[keys] &&  object1[keys] === object2[keys]){
       count++;
      }
      if(count === Object.keys(object1).length){
        indexes.push(i - k + 1)
      }
    }
  }
  for(var j = k; j < string1.length; j++){
    object2[string1[j - k]]--;
    if(object2[string1[j - k]] === 0){
      delete object2[string1[j - k]];
    }
    if(object2[string1[j]]){
      object2[string1[j]]++;
    }
    else{
      object2[string1[j]]=1;
    }
    var count = 0;  
    for(var keys in object2){
      if(object1[keys] &&  object1[keys] === object2[keys]){
       count++;
      }
      if(count === Object.keys(object1).length){
        indexes.push(j-k +1)
      }
    }
  }

 return indexes;
 
}