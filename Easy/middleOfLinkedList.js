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