var isLongPressedName = function(name, typed) {
  var index = 0; 
  for(var keys of typed){
    if(keys === name[index]){
        index++;
    }
  }

  return index === name.length;
  
};