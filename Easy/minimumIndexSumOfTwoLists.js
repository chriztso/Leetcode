var findRestaurant = function(array1, array2) {
  var restaurants = {}; 
  var mini;
  var favs = [];
  for(var i = 0; i < array1.length; i++){
    restaurants[array1[i]] = [i];
  }
  for(var z = 0; z < array2.length; z++){
    if(restaurants[array2[z]]){
      restaurants[array2[z]].push(z);
      if(restaurants[array2[z]] < mini){
        mini = restaurants[array2[z]];
      }
    }
  }
  var values = Object.values(restaurants).filter(function(x){return x.length > 1});
  values = values.map(function(x){return x.reduce(function(a,b){return a+b})});
  var mini = Math.min(...values);
  for(var keysOne in restaurants){
    if(restaurants[keysOne].length > 1){
      var indexSum = restaurants[keysOne].reduce(function(a,b){return a+b})
      if(indexSum === mini){
        favs.push(keysOne);
      }  
    }
  }
  
  return favs;

}