var rotateString = function(string1, string2) {
  if(string1.length === 0 && string2.length === 0){
    return true;
  }
  if(string1.length === 0){
    return false;
  }
 
  var string1 = string1.split('');
  var turns = string1.length;
  while(turns !==  1){
  var temp = string1.shift();
  string1.push(temp);
    if(string1.slice().join('') === string2){
      return true;
    }
    turns --;
  }

return false;

}