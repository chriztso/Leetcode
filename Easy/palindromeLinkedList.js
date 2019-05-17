var isPalindrome = function(head) {
  var nodes =  [];
  var current = head;
  while(current){
    nodes.push(current.val);
    current = current.next;
  }

  return nodes.slice().reverse().join('') === nodes.join('');

};