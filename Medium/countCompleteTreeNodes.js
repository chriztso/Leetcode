var countNodes = function(root) {
    if(!root){
        return 0;
    }
    var count  = 0; 
    function recurse(start){
        count++;
    if(start.left){
        recurse(start.left)
    }
    if(start.right){
        recurse(start.right)
    }
    }
    recurse(root); 
    return count;
};