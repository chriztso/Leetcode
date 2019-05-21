var isSymmetric = function(root) {
  var tree = {}; 
  function recurse(start, level){
    if(tree[level]){
      if(!start){
        tree[level].push(null)
      } else{
        tree[level].push(start.val)    
      }    
    } else{
      if(!start){
        tree[level] = [null]
      } else{
        tree[level] = [start.val];
      }    
    }
    
    if(!start){
      return;
    }
    recurse(start.left, level+1);
    recurse(start.right, level+1);
  }
  recurse(root, 0);
  var status  = true;
  for(var keys in tree){
    if(tree[keys].length !== 1){
      while(tree[keys].length !== 0){
        var first = tree[keys].shift();
        var last = tree[keys].pop();
        if(first !== last){
          return false;
        }    
      }
    }    
  }

  return status;  

};