var intersection = function(a, b) {
  var commons = [];
  var object1 = {};
  for(var i = 0; i < a.length; i++){
    if(b.indexOf(a[i]) !== -1){
      commons.push(a[i]);
    }
  }
  for(var j = 0; j < commons.length; j++){
    object1[commons[j]] = commons[j];
  }
  var commonNumbers = Object.keys(object1).map(function(x){return Number(x)});
  return commonNumbers;
}
   