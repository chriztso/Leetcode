var rotateRight = function(head, k) {
  if(!head){
    return null;
  }
  if(!head.next){
    return head;
  }
  
  while(k !== 0){
    var prev = head; 
    var current = head.next;
    while(current.next){
      current = current.next;
      prev = prev.next;
    }
    current.next = head; 
    prev.next = null; 
    head = current; 
    k--;
  }

 return head;

};