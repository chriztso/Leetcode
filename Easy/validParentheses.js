var isValid = function(s) {
  var brackets = {
    '[' : ']',
    '{' : '}',
    '(' : ')'
  }
  if(s.length === 1){
    return false;
  }
  var array = [];
  for(var i = 0; i < s.length; i++){
    if(s[i] === '[' ||s[i] === '{' ||s[i] === '(' ){
      array.push(s[i]);
    }
    else if(s[i] === ']' ||s[i] === '}' ||s[i] === ')' ){
      if(brackets[array.pop()] !== s[i] ){
        return false;
      }
    }
  }
  return array.length === 0;
};