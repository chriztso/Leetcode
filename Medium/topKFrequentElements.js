var topKFrequent = function(array, k) {
  var occurrences = {};
  var occurrencesTuples = [];
  var returnArray = [];
  for(var i = 0; i < array.length; i++){
    if(occurrences[array[i]]){
      occurrences[array[i]]++;
    }
    else{
      occurrences[array[i]] =1; 
    }
  }
  for(var keys in occurrences){
    occurrencesTuples.push([Number(keys), occurrences[keys]]);
  }
  occurrencesTuples.sort(function(a,b){return b[1] -a[1]});
  for(var i = 0; i < k; i++){
    returnArray.push(occurrencesTuples[i][0]);
  }
  return returnArray;
}