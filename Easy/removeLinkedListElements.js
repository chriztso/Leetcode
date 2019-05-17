var removeElements = function(head, val) {
    
  if(!head){
    return null;
  }

  while(head && head.val === val){
    head = head.next;
  }
      
  var current  = head;
  while(current && current.next){
    if(current.next.val === val){
      current.next = current.next.next;
    }
    else{
      current = current.next
    }    
  }
  
  return head;

}   