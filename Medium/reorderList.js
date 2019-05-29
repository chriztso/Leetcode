var reorderList = function(head) {
  if(!head){
    return null;
  }
  if(!head.next){
    return head;
  }
  if(!head.next.next){
    return head;
  }
  var first  = head; 
  var second = head.next;
  while(second !== previous){
    var previous = head; 
    var current = head.next; 
    while(current.next && previous){
      current = current.next;
      previous = previous.next; 
    }
    first.next = current; 
    previous.next = null; 
    current.next = second; 
    first = second; 
    if(first.next){
    second = first.next;
    }
  }

  return head;

};