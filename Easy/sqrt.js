var mySqrt = function(num) {
  if(num === 0){
      return 0
  }
  if(num < 4){
      return 1;
  }
    
  var low = 1; 
  var high = num/2 + 1;
  while(low < high){
    var mid = Math.floor((low+high)/2);
    if(mid * mid === num){
      return mid;
    }
    if(mid * mid > num){
      high = mid;
    }
    if(mid * mid < num){
      low = mid+1;
    }
  }

  return high-1;

}