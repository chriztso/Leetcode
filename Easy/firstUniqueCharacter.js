var firstUniqChar = function(s) {
  if(s.length === 0){
    return -1;
  }
  for(var i = 0; i < s.length; i++){
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
      return i;
    } 
  }
  return -1;  
}   