var reverseList = function(head) {
  var previous =  null; 
  var current = head; 
  var following = head; 
  while(current !== null){
    following = following.next;
    current.next = previous; 
    previous = current;
    current = following;
  }
  return previous;
};