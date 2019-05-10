var numIslands = function(array) {
    var islands = 0; 
    for(var rows = 0; rows < array.length; rows++){
      for(var columns = 0; columns < array[rows].length; columns++){
        if(array[rows][columns] === '1'){
          islands++; 
          helper(rows, columns);
        }
      }
    }
  
  function helper(x,y){
   array[x][y] = '2'; 
    if(x+1 < array.length && array[x+1][y] !== '0' && array[x+1][y] !== '2' ){
      helper(x+1,y)
    }
    if(x-1 >= 0 && array[x-1][y] !== '0' &&array[x-1][y] !== '2' ){
      helper(x-1,y)
    }
    if(y+1 < array[0].length && array[x][y+1] !== '0' &&array[x][y+1] !== '2' ){
      helper(x,y+1)
    }
    if(y-1 >= 0 && array[x][y-1] !== '0' &&array[x][y-1] !== '2'){
      helper(x,y-1)
    }
  }
  
    
  return islands;
}