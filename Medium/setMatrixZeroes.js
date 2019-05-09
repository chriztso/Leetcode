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