var deleteDuplicates = function(head) {
    var object1 = {};
      var current = head;
      while(current){
          if(object1[current.val]){
              object1[current.val]++;
          } else{
              object1[current.val] = 1;
          }
          current = current.next;
      }
      while(head && object1[head.val] >= 2){
          head = head.next;
      }
      var current2 = head;
      while(current2 && current2.next){
          if(object1[current2.next.val] >= 2){
              current2.next = current2.next.next;
          }
          else{
              current2 = current2.next;
          }
      }
  return head;
};