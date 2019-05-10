var productExceptSelf = function(array) {
  var all = [];
  for(var i = 0; i < array.length; i++){
    var arrayItem = array[i];
    array.splice(i, 1);
    var product1 =  array.reduce(function(a,b){return a*b;});
    array.splice(i, 0, arrayItem);
    all.push(product1);
  }
  return all;
}   