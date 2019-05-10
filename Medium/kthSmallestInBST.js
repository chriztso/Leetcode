var kthSmallest = function(root, k) {
  var elements = []; 
  function inner(start){
  elements.push(start.val);
  if(start.left){
      inner(start.left, k);
  }
   if(start.right){
      inner(start.right, k);
  }
  }
  inner(root);
  elements.sort(function(a,b){return a-b});
  return elements[k-1];
};