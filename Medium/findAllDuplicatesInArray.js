var findDuplicates = function(nums) {
  var doubles = [];
  nums.sort(); 
  for(var i = 0; i < nums.length; i++){
    if(nums[i] === nums[i+1]){
      doubles.push(nums[i]);
    }
  }
  
  return doubles;
};

//2nd solution
var findDuplicates = function(nums) {
  //create duplicate array
  //go through each element
  //go to the index -1 they represent 
  //if number is already negative, add to duplicate
     //else make it negative
  let duplicates = []
  for(let i = 0; i < nums.length; i++){
      let index = Math.abs(nums[i])-1
      if(nums[index] < 0){
          duplicates.push(index+1)
      }
      nums[index] *= -1
  }
  return duplicates
};