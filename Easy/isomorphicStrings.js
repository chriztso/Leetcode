var isIsomorphic = function(string1, string2) {
  var occurrence1 = {};
  var occurrence2 = {};
  for(var i = 0; i < string1.length; i++){
    if(occurrence1[string1[i]]){
      occurrence1[string1[i]].push(i)
    } else{
      occurrence1[string1[i]] = [i]
    }
  }
  
  for(var j = 0; j < string2.length; j++){
    if(occurrence2[string2[j]]){
      occurrence2[string2[j]].push(j)
    } else{
      occurrence2[string2[j]] = [j]
    }
  }
  var values1 = Object.values(occurrence1).map(function(x){return JSON.stringify(x)});
  var values2 = Object.values(occurrence2).map(function(x){return JSON.stringify(x)});
  var count = 0; 
  for(var z = 0; z < values1.length; z++){
    if(values2.indexOf(values1[z]) !== -1){
      count++;
    }
  }
  return count  === values1.length;
}