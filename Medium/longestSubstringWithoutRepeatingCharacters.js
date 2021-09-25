var lengthOfLongestSubstring = function(string) {
  if(string.length === 1){
    return 1;
  }
  if(string.length === 0){
    return 0;
  }
  var max = 0;
  var object1 = {};
  var start = 0; 
  var array1 =  string.split('');
  var dups = array1.filter(function(x){return array1.indexOf(x) === array1.lastIndexOf(x)});
  if(dups.length === string.length){
    return string.length
  }

  for(var i = 0; i < array1.length; i++){
    if(object1[array1[i]]){
      delete(object1[array1[start]]);
      max = Math.max(max, i - start);
      i--;
      start += 1;
      
    }
    else{
      object1[array1[i]] =1;
      
    }
    
  }

  var keys = Object.keys(object1);
  var dups2 = keys.filter(function(x){return keys.indexOf(x) === keys.lastIndexOf(x)});
  
  if(dups2.length > max){
      max = dups2.length;
  }

  return max;
}

//2nd solution
var lengthOfLongestSubstring = function(s) {
  let longest = 0
  let start = 0
  let end = 0
  let chars = {}
  while(end < s.length){
      let startChar = s[start]
      let endChar = s[end]
      if(chars[endChar]){
          delete chars[startChar]
          start++
      } else{
          chars[endChar] = 1
          end++
          let currentLen = Object.keys(chars).length
          longest = Math.max(currentLen, longest)
      }
  }
  return longest
};