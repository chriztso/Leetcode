var mergeTwoLists = function(l1, l2) {
  if(!l1 && !l2){
    return null;
  }

  if(!l1){
    return l2;
  }

  if(!l2){
    return l1;
  }

  if(l1 && l2){
    if(l1.val !== l2.val){
      var less = l1.val > l2.val ? l2:l1;
      var greater = l1.val > l2.val ? l1:l2;
    } else{
      var less = l1; 
      var greater = l2;
    } 
    while(less && greater){
      if(less.val <= greater.val && less.next === null){
        less.next = greater;
        break;
      }
      if(less.val <= greater.val && less.next.val >= greater.val){
        var temp = less.next;
        var temp2 = greater.next;
        less.next = greater;
        greater.next = temp;
        greater = temp2;
        less = less.next;
      } else{
        less = less.next;
      }
    }
  }
  
  return l1.val <= l2.val ? l1: l2;

};