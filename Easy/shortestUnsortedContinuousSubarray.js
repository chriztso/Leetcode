var findUnsortedSubarray = function(array) {
  var copy = array.slice().sort(function(a,b){return a-b}); 
  if(JSON.stringify(array) === JSON.stringify(copy)){
    return 0;
  }
  var diffs = []; 
  for(var i = 0; i < array.length; i++){
    if(array[i] !== copy[i]){
      diffs.push(i);
    }
  }
  var needToChange = diffs[diffs.length-1] - diffs[0] + 1; 
  return needToChange;
}