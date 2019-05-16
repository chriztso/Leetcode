var arrangeCoins = function(n) {
  var rows = 0; 
  while(n > rows){
    rows++;
    n -= rows; 
  }
  
  return rows;
  
};