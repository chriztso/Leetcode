var findMin = function(array) {
  while(array[0] > array[array.length-1]){
    var temp = array.shift(); 
    array.push(temp);
  }
  return array[0];
}