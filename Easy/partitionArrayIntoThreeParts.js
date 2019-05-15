var canThreePartsEqualSum = function(array) {
    for(var i = 1; i < array.length; i++){
      var partOne = array.slice(0,i);
      var partTwo = array.slice(i);
      var sumOne = partOne.reduce(function(a,b){return a+b});
      var sumTwo = partTwo.reduce(function(a,b){return a+b});
    
      if(sumTwo/2 === sumOne){
        for(var j = i; j < array.length-1; j++){
          var partThree =  array.slice(i, j+1);
          var partFour = array.slice(j+1);
          var sumThree = partThree.reduce(function(a,b){return a+b});
          var sumFour = partFour.reduce(function(a,b){return a+b});
          if(sumThree === sumFour){
            return true;
          }
  
        }
      }
    }
  return false;
}