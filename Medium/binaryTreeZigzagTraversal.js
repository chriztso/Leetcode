var zigzagLevelOrder = function(root) {
    if(!root){
        return [];
    }
    var object1 = {};
    function recurse(start, level){
        if(object1[level]){
            object1[level].push(start.val)
        } else {
            object1[level] = [start.val]
        }
        if(start.left){
            recurse(start.left, level+1)
        }
        if(start.right){
            recurse(start.right, level+1)
        }
    }
    recurse(root, 0)
    var answer = Object.values(object1);
    for(var i = 0; i < answer.length; i++){
        if(i % 2 !== 0){
            answer[i].reverse();
        }
    }
    return answer;
    
};