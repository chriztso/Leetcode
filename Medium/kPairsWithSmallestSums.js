var kSmallestPairs = function(array1, array2, k) {
  if(array1.length === 0 || array2.length ===0){
    return [];
  }
  var array3 = [];
  var array4 = [];
  for(var i = 0; i < array1.length; i++){
    for(var j = 0; j < array2.length; j++){
      array3.push([array1[i], array2[j]]);
    }
  }
  array3.sort(function(a,b){return a.reduce(function(a,b){return a + b}) - b.reduce(function(a,b){return a + b})});
    
  if(k > array3.length){
    return array3;
  }
  for(var i = 0; i < k; i++){
    array4.push(array3[i]);
  }
  return array4;
}