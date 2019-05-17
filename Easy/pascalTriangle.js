var generate = function(num) {
  if(num === 0){
    return []
  }
  var pascals = [[1], [1,1]];
  if(num === 1){
    return [pascals[0]]
  }
  var current = [];
  for(var i = 0; i < num-2; i++){
    for(var j = 0; j < pascals[pascals.length-1].length-1; j++){
      var sum = pascals[pascals.length-1][j] + pascals[pascals.length-1][j+1]
      current.push(sum);
    }
    current.push(1);
    current.unshift(1);
    pascals.push(current);
    current = [];
  }

  return pascals;
  
}