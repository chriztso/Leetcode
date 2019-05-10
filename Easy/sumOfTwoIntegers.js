var getSum = function(a, b) {
  if(a >= 0 && b >= 0){
    var arr1 = Array(a);
    var arr2 =Array(b) ;
    var arr3 = arr1.concat(arr2);
    return arr3.length;
  }
  if(a < 0 && b < 0){
    var arr1 = Array(a * -1);  
    var arr2 =Array(b * -1) ;
    var arr3 = arr1.concat(arr2);
    return arr3.length * -1;
  }
  if(a < 0){
    var arr2 = Array(b) ;
    arr2.splice(0, a * -1);
    return arr2.length;
  } 
  if(a < 0 && (a * -1) > b){
    var arr1 = Array(a * -1);
    arr1.splice(0, b);
    return arr1.length * -1;
  } 
  if(b < 0 && (b * -1) > a){
    var arr1 = Array(b * -1);
    arr1.splice(0, a);
    return arr1.length * -1;
  } 
  if(b < 0){
    var arr2 =Array(a) ;
    arr2.splice(0, b * -1);
    return arr2.length;
  } 
  
}