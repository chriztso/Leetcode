var maxProfit = function(prices) {
  var max = 0;
  for(var i = 0; i < prices.length; i++){
    for(var j = i+1; j < prices.length; j++){
      var current = prices[j] - prices[i]
      if(current > max){
        max = current;
      }
    }
  }

  return max;
  
};