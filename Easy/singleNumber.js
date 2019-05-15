var singleNumber = function(nums) {
  //keep count in an object
  var occurrences = {};
  for(var i = 0; i< nums.length; i++){
    if(occurrences[nums[i]]){
      occurrences[nums[i]] ++; 
    }
    else{
      occurrences[nums[i]] = 1;
    }
   }
  for(keys in occurrences){
    if(occurrences[keys] === 1){
      return Number(keys);
    }
  }
  
};