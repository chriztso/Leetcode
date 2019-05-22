var maxProfit = function(array) {
  var profit = 0; 
  for(var i = 0; i < array.length; i++){
    if(array[i] < array[i+1]){
      profit -= array[i];
      profit += array[i+1];
    }
  } 

  return profit;

}