var countSegments = function(string) {
  if(string.length === 0){
    return 0;
  }
  var s = string.split(' ').filter(function(x){return x !== ''});
  return s.length;  
};