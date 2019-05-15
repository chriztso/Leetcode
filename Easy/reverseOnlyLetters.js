var reverseOnlyLetters = function(string) {
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ';
  var nonletters = [];
  var indexes = [];
  var newString = '';

  for(var i =0 ; i< string.length; i++){
    if(letters.indexOf(string[i]) !== -1){
      newString += string[i];
    }  
    //put non letters into object plus their index
    if(letters.indexOf(string[i]) === -1){
      nonletters.push(string[i]);
      indexes.push(i);
    }
  }

  newString = newString.split('').reverse();
  for(var i = 0; i < nonletters.length; i++){
    newString.splice(indexes[i], 0, nonletters[i]);
  }

 return newString.join('');

}