var convertBST = function(root) {
  if(!root){
    return null;
  }
  var nodes = []; 
  function recurse(start){
    nodes.push(start.val);
    if(start.left){
      recurse(start.left);
    }
    if(start.right){
      recurse(start.right);
    }
  }
  recurse(root);
  function changer(starter){
    var sum = 0; 
    for(var i = 0; i < nodes.length; i++){
      if(nodes[i] > starter.val){
        sum += nodes[i];
      }
    }
    starter.val = starter.val + sum; 
    if(starter.left){
      changer(starter.left);
    }
    if(starter.right){
      changer(starter.right);
    }
  }
  changer(root);
  return root;
};