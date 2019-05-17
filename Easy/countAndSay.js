var countAndSay = function(n) {
  var store = ['1'];
  if(n ===1){
    return store[0];
  }
  while(store.length !== n){
    var string = [];
    var index  = 0; 
    var count = 0;
    for(var i = 0; i < store[store.length-1].length; i++){
      var current =  Number(store[store.length-1][index]);
      if(Number(store[store.length-1][i])=== current){
        count++;
      }
      if(Number(store[store.length-1][i+1]) !== current){
        string.push(count,current);
        index = i+1;
        count = 0;
      }
    }
    store.push(string.join(''))
  }

  return store[store.length-1];
  
}