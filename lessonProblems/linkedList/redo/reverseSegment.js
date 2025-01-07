// Write a function `reverseSegment` that reverses a segment
// of a singly linked list between two given positions,
// `start` and `end`. The function should take the head of
// the linked list and two integers, `start` and `end`, as
// input and return the modified list.

// The positions `start` and `end` are 1-indexed, and `start`
// is guaranteed to be less than or equal to `end`.

// The list is guaranteed to have at least one node, and `start`
// and `end` are guaranteed to be within the bounds of the list.

// Example:
// Input: head = [1, 3, 5, 7, 9], start = 2, end = 4
// Output: [1, 7, 5, 3, 9]
// Explanation: The segment from position 2 to 4 (3 -> 5 -> 7)
//              is reversed to (7 -> 5 -> 3).

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

ALGORITHM:
  have a dummy pointing at the head
  have a previous pointing at dummy
  have a current pointing at head

  up to start,
    slide previous to current
    slide current to current.next

  have a beforeSegment pointing at previous
  have a newEnd pointing at current
  have a nextNode of current.next

  up to end
    have a uberNext of current.next.next
    nextNode.next points to current
    current slides to nextNode
    nextNode slides to uberNext

  beforeSegment.next points to current
  newEnd points at nextNode

  return dummy.next

*/
function reverseSegment(head, start, end) {
  if (start === end) return head;

  let dummy = new ListNode(0, head);
  let previous = dummy;
  let current = head;

  for (let i = 1; i < start; i++) {
    previous = current;
    current = current.next;
  }

  let beforeSegment = previous;
  let newEnd = current;
  let nextNode = current.next;

  for (let i = start; i < end; i++) {
    let uberNext = nextNode.next;
    nextNode.next = current;
    current = nextNode;
    nextNode = uberNext;
  }

  beforeSegment.next = current;
  newEnd.next = nextNode;

  return dummy.next;
}

let list1 = createLinkedList([1, 3, 5, 7, 9]);
let list2 = createLinkedList([1, 2, 3]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let list6 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
let list7 = createLinkedList([1, 2]);

console.log(list6);
console.log(list7);

printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null
