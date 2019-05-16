var checkPossibility = function(array) {
  if(array.length === 1){
      return true;
  }
  for(var i = 0; i < array.length; i++){
    var part = array.slice(0, i).concat(array.slice(i+1, array.length));
    var count  = 1; 
    for(var j = 0; j < part.length; j++){
      if(part[j] <= part[j+1]){
        count ++;
      }
      else{
        count = 1;
      }  
      if(count  === part.length){
        return true;
      }  
    }
    count  = 1;    
  }

  return false;

}    