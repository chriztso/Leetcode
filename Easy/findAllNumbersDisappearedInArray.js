var findDisappearedNumbers = function(array) {
  var count = array.length+1; 
  var start = 1;
  console.log(count);
  var missingOnes = [];
  while(start !== count){
    if(array.indexOf(start) === -1){
      missingOnes.push(start);
      start++;
    }
    else{
      console.log('here');
      start++;
     }
  }
  return missingOnes;
}