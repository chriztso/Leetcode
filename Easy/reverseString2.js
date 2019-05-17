var reverseStr = function(string, k) {
  var chunks = []; 
  var returnString = '';
  string = string.split('');
  for(var i = 0; i < string.length; i+=2*k){
    var chunk = string.slice(i, i+2*k);
    chunks.push(chunk);
  }
  for(var j = 0; j < chunks.length; j++){
    if(chunks[j].length <= 2*k && chunks[j].length > k){
      var temp = chunks[j].slice(0, k).reverse();
      var rest = chunks[j].slice(k, chunks[j].length);
      returnString += (temp.concat(rest)).join('');
    }
    if(chunks[j].length <= k){
      returnString += (chunks[j].reverse()).join('');
    }
  }

  return returnString;

}