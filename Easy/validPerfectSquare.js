var isPerfectSquare = function(num) {
  if(num === 1){
    return true;
  }
  for(var i = 1; i < num; i++){
    if(num/i === i){
        return true;
    }
  }

  return false;
  
};