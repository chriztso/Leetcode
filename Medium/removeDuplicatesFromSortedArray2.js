var removeDuplicates = function(nums) {
    var  i = 0;
    while(i < nums.length-1){
        var indexOne = nums.indexOf(nums[i]);
        var indexLast = nums.lastIndexOf(nums[i]);
        if(indexOne === indexLast){
            i++;
        }
        if(indexOne === indexLast - 1){
            i+=2;
        }
        else if(indexOne !== indexLast &&  indexOne !== indexLast - 1) {
            var start = indexOne; 
            var end = indexLast;
           while(start !== end - 1){
             nums[start] = null; 
             start++;
           }
            i+= indexLast-indexOne+1;
        }
    }
   
   for(var j = 0;  j < nums.length; j++){
     if(nums[j] === null){
       nums.splice(j,1);
       j--;
     }
   }

};