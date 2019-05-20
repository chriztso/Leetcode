var compress = function(array) {
  var count = 1;
  var current = 0; 
  for(var i = 0; i < array.length; i++){
    if(array[i+1] === array[current]){
      count++;
    } else{
      if(count > 1){
        array.splice(current+1, count-1);
        i = i - count + 2; 
        array.splice(i, 0, ...count.toString());
      }
      count = 1;
      current = i +1;
    }
  }
  return array.length;
}