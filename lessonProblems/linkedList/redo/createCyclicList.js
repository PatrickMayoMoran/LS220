class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

let node3 = new ListNode(3)
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
console.log(node1);

node3.next = node1;
console.log(node1);

let current = node1.next.next.next;
