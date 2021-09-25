var setZeroes = function(matrix) {
    var pairs = [];
    var rows = {};
    var columns = {};
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                pairs.push([i, j]);
            }
        }
    }
    for(var z = 0; z < pairs.length; z++){
      if(rows[pairs[z][0]]){
        rows[pairs[z][0]]++;
      }
      else{
        rows[pairs[z][0]] = 1;
      }
    }

     for(var y = 0; y < pairs.length; y++){
      if(columns[pairs[y][1]]){
        columns[pairs[y][1]]++;
      }
      else{
        columns[pairs[y][1]] = 1;
      }
    }

   for(var t = 0; t < matrix.length; t++){
     for(var c = 0; c < matrix[t].length; c++){
       if(rows[t]){
         matrix[t][c]=0
       }
       if(columns[c]){
         matrix[t][c]=0
       }
     }
   }

}

//2nd solution
var setZeroes = function(matrix) {
  const zeroColumns = []
  const zeroRows = []
  for(let rows = 0; rows < matrix.length; rows++){
      for(let columns = 0; columns < matrix[rows].length; columns++){
          if(matrix[rows][columns] === 0){
              zeroColumns.push(columns)
              zeroRows.push(rows)
          }
      }
  }
  for(let i = 0; i < zeroRows.length; i++){
      let row = zeroRows[i]
      for(let j = 0; j < matrix[row].length; j++){
          matrix[row][j] = 0
      }
  }
  for(let z = 0; z < zeroColumns.length; z++){
      let column = zeroColumns[z]
      for(let a = 0; a < matrix.length; a++){
          matrix[a][column]= 0
      }
  }
  return matrix
};