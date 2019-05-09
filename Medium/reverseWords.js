var reverseWords = function(string) {
  var array1  = string.split(' ').filter(function(x){return x !== ''});
  var array2 = [];
  array1.reverse();
  var spaces = array1.length - 1;
  for(var i = 0; i < spaces; i++){
    array1.push(' ');
  }
  while(array1.length !== 0){
   var first = array1.shift();
   var last = array1.pop();
   
   if(first){
     array2.push(first);
   }
   if(last){
    array2.push(last);
   } 
  }
  return array2.join('')
}
