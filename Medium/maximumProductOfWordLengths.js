var maxProduct = function(array) {
  var max = 0;
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      var firstWord = array[i].split('');
      var product = 0;
      if(firstWord.every(function(x){return array[j].indexOf(x) === -1})){
          product = array[i].length * array[j].length;
      }
      if(product > max){
        max = product;
      }
    }
  }
  return max;
}