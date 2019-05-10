var groupAnagrams = function(array) {
  var copy = array.slice().map(function(x){return x.split('').sort().join('')});
  var groups = [];
  var indexes = {};
  for(var i = 0; i < copy.length; i++){
    if(indexes[copy[i]]){
      indexes[copy[i]].push(i);
    }
    else{
      indexes[copy[i]]=[i];
    }
  }
  for(var keys in indexes){
    groups.push(indexes[keys]);
  }
  for(var j = 0; j < groups.length; j++){
    for(var z = 0; z < groups[j].length; z++){
      groups[j][z] = array[groups[j][z]];
    }
  }
  
  return groups;
}