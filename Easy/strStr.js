var strStr = function(array, needle) {
  var start = '';
  for(var i = 0; i < needle.length; i++){
    start += array[i];
  }
  
  if(start === needle){
    return 0;
  }
  
  for(var j = 0; j < array.length-needle.length; j++){
    start = start.substring(1);
    start += array[j + needle.length];
    if(start === needle){
      return j+1;
    }
  }

  return -1;
  
}