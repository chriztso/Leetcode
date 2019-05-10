var getMinimumDifference = function(root) {
  var nodes = [];
  function inner(start){
      nodes.push(start.val);
      if(start.left){
          inner(start.left);
      }
      if(start.right){
          inner(start.right);
      }
  }
  inner(root);
  nodes = nodes.filter(function(x){return x !== null});
  var min = Math.abs(nodes[0] - nodes[1]);
  for(var i = 0; i < nodes.length; i++){
      for(var j = i +1; j < nodes.length; j++){
         if((Math.abs(nodes[i] - nodes[j])) < min){
             min = (Math.abs(nodes[i] - nodes[j]))
         }
      }
  }
  
  return min;
    
};