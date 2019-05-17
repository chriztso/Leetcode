var backspaceCompare = function(string1, string2) {
  var array1 = string1.split('');
  var array2 = string2.split('');
  for(var i = 0; i < array1.length; i++){
    if(array1[i+1]==='#'){
      array1.splice(i,2);
      i = -1;
    }
    if(array1[i]==='#'){
      array1.splice(i,1);
      i=-1;
    }
  }

  for(var j = 0; j < array2.length; j++){
    if(array2[j+1]==='#'){
      array2.splice(j,2);
      j = -1;
    }

    if(array2[j]==='#'){
        array2.splice(j,1); 
        j = -1
    }
  }
     
  return array1.join('') ===array2.join(''); 

}  