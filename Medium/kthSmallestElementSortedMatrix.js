var kthSmallest = function(array, index) {
  var merged = [];
  for(var i = 0; i < array.length; i++){
    merged  = merged.concat(array[i]);
  }
  merged.sort(function(a,b){return a-b});
  return merged[index-1];
}
  