var isPalindrome = function(x) {
  var a = x.toString(); 
  var b = a.split(''); 
  var c = b.reverse(); 
  var d = c.join(''); 
  var e = Number(d); 
  
  return (e === x);
    
};