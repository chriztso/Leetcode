var repeatedSubstringPattern = function(string) {
  var string1 = '';
  for(var i = 0; i < string.length-1; i++){
    string1 += string[i];
    var all = string.split(string1);
    if(all.every(function(x){return x.length === 0})){
      return true;
    }
  }

  return false;
  
}  
