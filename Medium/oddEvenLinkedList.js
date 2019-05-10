var oddEvenList = function(head) {
  var evens = [];
  var odds = [];
  if(head === null){
      return null;
  }
  var odd = head;
  var even = head.next;
   var start = head.next;
  while(even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = start;
  return head;
  
};