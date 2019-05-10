var isSubsequence = function(string1, string2) {
  var index = 0; 
  var len = string1.length; 
  for(var keys of string2){
      if(keys === string1[index]){
          index++;
      }
     
  }
  
  return index === len;
}