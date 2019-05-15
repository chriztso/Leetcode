var nums = { I : 1,
    V :5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000

}

var romanToInt = function(s) {
  var count = 0;
  var digits = s.split('');
  for(var i= 0; i < digits.length; i++){
  if(nums[digits[i]] < nums[digits[i+1]]){
    count -= nums[digits[i]];
  }
  else{
    count += nums[digits[i]];
  }
  console.log(count);
  }

  return count;

};