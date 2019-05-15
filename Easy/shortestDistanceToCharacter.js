var shortestToChar = function(string, char) {
  var indexesofChar = [];
  var indexesToReturn = [];
  var letters = string.split('');
  for(var i = 0; i < letters.length; i++){
    if(letters[i] === char){
      indexesofChar.push(i);
    }
  }
  for(var i = 0 ; i < letters.length; i++){
    var distances = [];
    for(var j = 0; j < indexesofChar.length ; j++){
      distances.push(Math.abs(i - indexesofChar[j]));
    }
    indexesToReturn.push(Math.min(...distances));
  }

return indexesToReturn;

}