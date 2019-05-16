var validPalindrome = function(string) {
  var left = 0; 
  var right = string.length -1;
  while(left < right){
    if(string[left] !== string[right]){
      return isPalindrome(string, left+1, right) ||
      isPalindrome(string, left, right-1);
    }
    else{
      left++;
      right--;
    }
  }

  return true;

}
  
var isPalindrome = function(string, left, right){
  while(left < right){
    if(string[left] !==  string[right]){
      return false;
    }
    else{
      left++; 
      right--;
    }
  }
  return true;
}