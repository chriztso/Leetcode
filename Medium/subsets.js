var subsets = function(array) {
  var ways = {};
  var solutions = [];
  function recurse (arr){
    ways[arr] = arr;
    for(var i = 0; i < arr.length; i++){
      var part = arr.slice(0, i).concat(arr.slice(i+1, arr.length));
      if(!ways[part]){
        ways[part] = part;
        recurse(part);
      }
    }
  }
  recurse(array);
  ways = Object.values(ways);
  for(var i = 0; i< ways.length; i++){
    solutions.push(ways[i]);
  }
  return solutions;
}