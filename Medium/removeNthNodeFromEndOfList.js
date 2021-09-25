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


//2nd solution
var removeNthFromEnd = function(head, n) {
  let p1 = head
  let p2 = head
  for(let i = 0; i < n; i++){
      p1 = p1.next
  }
  if(!p1){ return head.next}
  while(p1.next){
      p1 = p1.next
      p2 = p2.next
  }
  p2.next = p2.next.next
  return head
};