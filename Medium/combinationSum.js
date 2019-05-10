var combinationSum = function(array, target) {
  var combos = [];
  var array = array;
  function recurse(store, num1){
    if(num1 === 0){
      store.sort(function(a,b){return a-b});
      if(combos.indexOf(JSON.stringify(store)) === -1){
      combos.push(JSON.stringify(store));
      }
      return;
    }
    if(num1 < 0){
      return;
    }
    for(var i = 0; i < array.length; i++){
      recurse(store.concat(array[i]), num1 - array[i]);
    }
  }
  recurse([], target);
  var answer = combos.map(function(x){return JSON.parse(x)});
  return answer;
}    