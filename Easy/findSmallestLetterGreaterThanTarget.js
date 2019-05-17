var nextGreatestLetter = function(letters, target) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var largest = letters[0];
  var obj = {};
  var char = 0;
  
  for(var i = 0; i < alpha.length; i++){
    obj[alpha[i]] = char;
    char++;
  }

  for(var i = 0; i < letters.length; i++){
    if(obj[letters[i]] > obj[target]){
      return(letters[i]);
    }
  }

  return largest;

}