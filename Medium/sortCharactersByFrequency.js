var frequencySort = function(string) {
  var string1 = '';
  var array1 = [];
  var object1 = {};
  for(var i = 0; i < string.length; i++){
    if(object1[string[i]]){
      object1[string[i]]++;
    }
    else{
    object1[string[i]]=1;
    }
  }
  for(var key in object1){
    array1.push([key, object1[key]]);
  }
  array1.sort(function(a,b){
    return b[1] - a[1];
  })
  for(var i = 0; i < array1.length; i++){
    string1 += array1[i][0].repeat(array1[i][1]);
  }
 return string1;
}