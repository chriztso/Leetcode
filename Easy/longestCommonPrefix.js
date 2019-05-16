var longestCommonPrefix = function(array) {
  var string1 = "";
  if(array.length === 0){
    return "";
  }
  if(array.length === 1){
    return array[0]
  }
  for(var i = 0; i < array[0].length; i++){
    if(array.every(function(x){return x[i] === array[0][i]})){
      string1 += array[0][i];
    } else{
      return string1
    }
  }

  return string1

}    