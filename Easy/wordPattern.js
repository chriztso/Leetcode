var wordPattern = function(pattern1, string) {
if(pattern1.length === 0){
  return false;
}
var index1 = [];
var index2 = [];
var pattern = pattern1.split('');
var string1 = string.split(' ');
var j = 0;
while(j !== pattern.length){
  for(var i = 0; i < pattern.length; i++){
    if(pattern[i] === pattern[j]){
      index1.push(i);
    }  
  }
  for(var z = 0; z < string1.length; z++){
    if(string1[z] === string1[j]){
      index2.push(z);
    }  
  }
  if(JSON.stringify(index1) !== JSON.stringify(index2)){
    return false;
  }
  
  index1 = [];
  index2 = [];
  j++;
}

  return true;
  
}