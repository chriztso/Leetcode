var middleNode = function(head) {
  var nodes = [];
  while(head){
    nodes.push(head);
    head = head.next;
  }
  console.log(nodes);
  if(nodes.length % 2 !== 0){
    var index = Math.floor(nodes.length/2);
    return nodes[index];
  }
  if(nodes.length % 2 === 0){
    var index = (nodes.length/2);
    return nodes[index];
  }
};


//2nd solution
var middleNode = function(head) {
  let listLen = 0
  let current = head
  while(current !== null){
      listLen++
      current = current.next
  }
  let indexOfNodeToReturn = listLen % 2 === 0 ? listLen/2 : Math.floor(listLen/2)
  let current2 = head
  while(indexOfNodeToReturn > 0){
      current2 = current2.next
      indexOfNodeToReturn--
  }
  return current2
};