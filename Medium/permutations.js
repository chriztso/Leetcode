var permute = function(array) {
  var solutions = [];
  function recurse(combo = []){
    if(combo.length === array.length){
      solutions.push(combo);
      return;
    }
    for(var i = 0; i < array.length; i++){
      recurse(combo.concat(array[i]));
    }
  }  
  recurse();
  solutions = solutions.filter(function(x){return x.every(function(y){return x.indexOf(y) === x.lastIndexOf(y)})});
 return solutions;
}