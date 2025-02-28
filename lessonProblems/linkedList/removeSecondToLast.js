// Write a function removeSecondToLast that removes the
// second-to-last node from a linked list. The function
// should take the head of the linked list as input and
// return the head of the modified list. The list is
// guaranteed to have at least two nodes. Implement the
// solution using only one pass through the list. If
// the list has exactly two nodes, the function should
// remove the head node and return the second node as
// the new head.

// Example 1:
// Input: 1 -> 2 -> 3 -> 4 -> 5
// Output: 1 -> 2 -> 3 -> 5

// Example 2:
// Input: 1 -> 2
// Output: 2

// Example 3:
// Input: 3 -> 2 -> 1
// Output: 3 -> 1

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

/*
ALGORITHM
  let dummy point to head
  let previous point to dummy
  let current point to head

  while current.next.next isn't null
  (this means current is NOT second to last)
  slide previous to current
  slide current to next

  After the loop, current.next.next IS null so current is second to last
  make previous point to current.next
  return dummy next

*/
/* ORIGINAL IMPLEMENTATION -
    since length of list is guaranteed to be at least 2,
    just use current.next.next to check for end and find 2nd to last node

function removeSecondToLast(head) {
  let dummy = new ListNode(0, head);
  let previous = dummy;
  let current = head;

  while (current.next.next !== null) {
    previous = current;
    current = current.next;
  }

  previous.next = current.next;
  return dummy.next;
}
*/

// ALGORITHM
// fast-slow: use two pointers, one moving "fast" and one moving "slow"
// start slow at dummy
// start fast at two ahead of head
// move them both together one at a time
// once fast is null, slow is node before one to be removed

// This "Fast" is same as my current.next.next basicall
function removeSecondToLast(head) {
  let gap = 2 // this could be a parameter for removing nth to last node
  let dummy = new ListNode(0, head);

  let slow = dummy;
  let fast = head;

  for (let i = 0; i < gap; i++) { // i < gap is refactoring for any size gap
    fast = fast.next;
  }

  while (fast) { // for checking for not null, can just use truthy fast value
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}
// Test cases
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([3, 2, 1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([10, 20, 30, 40, 50, 60]);

console.log("Original lists:");
printLinkedList(list1);
printLinkedList(list2);
printLinkedList(list3);
printLinkedList(list4);
printLinkedList(list5);

console.log("\nAfter removing second-to-last node:");
printLinkedList(removeSecondToLast(list1)); // Expected: 1 -> 2 -> 3 -> 5 -> null
printLinkedList(removeSecondToLast(list2)); // Expected: 2 -> null
printLinkedList(removeSecondToLast(list3)); // Expected: 3 -> 1 -> null
printLinkedList(removeSecondToLast(list4)); // Expected: 1 -> 2 -> 4 -> null
printLinkedList(removeSecondToLast(list5)); // Expected: 10 -> 20 -> 30 -> 40 -> 60 -> null
