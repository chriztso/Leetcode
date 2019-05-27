var removeNthFromEnd = function(head, n) {
  if(!head.next){
    return null
  }

  var count = 0;
  var current = head; 

  while(current){
    count++;
    current = current.next;
  }

  var stop = count - n;

  if(stop === 0){
    return head.next
  }

  var currentTwo = head;

  while(stop !== 1){
    currentTwo = currentTwo.next;
    stop--;
  }
  
  currentTwo.next = currentTwo.next.next;
  return head;
};