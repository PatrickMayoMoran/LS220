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
  [1 3 5 7 9], 2 - 4
  [1 7 5 3 9]

  Question:
    how to reassign head when whole thing is reversed?
    Dummy?


  if start === end, return head;
  Have a index counter start at 0 or 1
  current node start at head
  dummy node points to head
  previous same as dummy

  while the counter is less than start
    previous = current
    current = current.next
    index plus 1

  [3, 5, 7] null
   2, 3, 4
  uberNext gets current.next.next
  while counter is less than the end and next is not null
    current is 3
    next is 5
    next next is 7

    next.next point to 3 (5 points to 3)
    current points at next (5 is current)
    next slide to uberNext (7 is uber next)
    uberNext slide to next.next (null is uberNext)

  final swap
    current is 5
    next is 7
    ubernext is null

    next.next point to current (7 points at 5)
    previous points at current (before the end points at 7)

  return dummy.next


  How to reverse a linked list?
  [1, 2, 3]
  prev -> null
  current assigned to head

  dummy -> 1 -> 2 -> 3 -> null
  while current isn't null and current.next isn't null
    next is current .next
    current.next points to prev
    prev slides to current
    current slides to next

  return previous



*/
function reverseSegment(head, start, end) {
  // Implementation goes here
  let dummy = new ListNode(0, head);
  let previous = dummy;
  let current = head;
  let counter = 1;

  while (counter < start) {
    previous = current;
    current = current.next;
    counter += 1
  }

  let beforeReverse = previous;
  let newEnd = current;

  while (current !== null && counter <= end) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    counter += 1;
  }
  beforeReverse.next = previous;
  newEnd.next = current;

  return dummy.next;
}

let list1 = createLinkedList([1, 3, 5, 7, 9]);
let list2 = createLinkedList([1, 2, 3]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null
