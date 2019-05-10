var maxAreaOfIsland = function(array) {
    var num1 = 2;
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array[i].length; j++){
        if(array[i][j] === 1){
          recurse(i, j, num1);
          num1++;
        }
      }
    }
    function recurse(x,y, num){
      array[x][y] = num;
      if(x-1 >= 0 && array[x-1][y] === 1){
        recurse(x-1,y, num)
      }
      if(x+1 < array.length && array[x+1][y] === 1){
        recurse(x+1,y, num)
      }
      if(y-1 >= 0 && array[x][y-1] === 1){
        recurse(x,y-1, num)
      }
      if(y+1 < array[0].length && array[x][y+1] === 1){
        recurse(x,y+1, num)
      }
    }
     var object1 = {};
     for(var z = 0; z < array.length; z++){
      for(var y = 0; y < array[z].length; y++){
        if(object1[array[z][y]] && array[z][y]!== 0){
          object1[array[z][y]]++;
        } else{
        if(array[z][y]!== 0){
        object1[array[z][y]]=1
        }
        }
     }
     } 
     var areas =  Object.values(object1);
     var maxArea = Math.max(...areas);
    return areas.length !== 0 ? maxArea: 0;
  }