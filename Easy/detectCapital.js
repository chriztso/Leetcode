var detectCapitalUse = function(word) {
    //if all letters capital
    //if all letters not capital
    //if only first letter is capital in word more than one letter all
  var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var letters = word.split('');
  var restofword = letters.slice(1);
  if(word.length === 1 && caps.indexOf(word) === -1){
    return true;
  }
  
  if(letters.every(function(x){return caps.indexOf(x) !== -1;})){
    return true;
  }

  if(letters.every(function(x){return caps.indexOf(x) === -1;})){
    return true;
  }

  if(word.length > 1 && (caps.indexOf(letters[0]) !== -1) &&restofword.every(function(x){return caps.indexOf(x) === -1}) ){
    return true;
  }   

  return false;
};