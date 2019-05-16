var getIntersectionNode = function(headA, headB) {
  var length1 = 0;
  var length2 = 0;
  var current1 = headA;
  var current2 = headB;
  while(current1){
    length1++;
    current1 = current1.next;
  }
  while(current2){
    length2++;
    current2 = current2.next;
  }
  
  var diff = Math.abs(length1 - length2);
  var long = length1 >= length2 ? headA : headB;
  var short = length1 >= length2 ? headB : headA;
  console.log(long, short)
  while(diff > 0 && long){
    long = long.next;
    diff--;
  }
  while(long && short){
    if(long === short){
      return long;
    }
    else{
      long = long.next;
      short = short.next;
    }
  }
};