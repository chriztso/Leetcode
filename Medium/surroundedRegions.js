var solve = function(array) {
    if(array.length === 0){
        return null;
    }
  for(var firstRow = 0; firstRow < array[0].length; firstRow++){
    if(array[0][firstRow] === 'O'){
   
      marker(0, firstRow);
    }
  }
  for(var lastColumn = 1; lastColumn < array.length-1; lastColumn++){
    if(array[lastColumn][array[0].length-1] === 'O'){

      marker(lastColumn, array[0].length-1)
    }
  }
  for(var lastRow = 0; lastRow < array[array.length-1].length; lastRow++){
    if(array[array.length-1][lastRow]==='O'){
   
      marker(array.length-1, lastRow);
    }
  }
  for(var firstColumn = 1; firstColumn < array.length-1; firstColumn++){
    if(array[firstColumn][0] ==='O'){
      marker(firstColumn, 0)
    }
  }

  function marker(row, column){

    array[row][column] = 'A';
    //down
    if(row+1 < array.length && array[row+1][column] === 'O'){
     
      marker(row+1,column);
    }
    //up
    if(row-1 >= 0 && array[row-1][column] === 'O'){
  
      marker(row-1,column);
    }
    //left
    if(column-1 >= 0 && array[row][column-1] === 'O'){

      marker(row,column-1)
    }
    //right
    if(column+1 >= 0 && array[row][column+1] === 'O'){
    
      marker(row,column+1)
    }
  }
  
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){
      if(array[i][j] === 'O'){
        array[i][j] = 'X'
      }
      if(array[i][j] === 'A'){
        array[i][j] = 'O'
      }
    
      
    }
  }
 
}