// Write a function `removeDuplicates` that removes all
// nodes with duplicate values from a sorted linked list,
// leaving only distinct values from the original list.
// The function should take the head of the sorted linked
// list as input and return the modified list. The list
// should remain sorted after removing duplicates. If the
// list becomes empty after removing all duplicates,
// return null.

// Example:
// Input: head = [1, 2, 2, 3, 3, 4, 5, 5]
// Output: [1, 4]
// Explanation: The values 2, 3, and 5 appear multiple times, so
//              they are removed. Only 1 and 4 remain as unique
//              values.
/*
GOAL: Return a linked list with all duplicates removed

INPUT: head
OUTPUT: head, or null

RULES:
  list is sorted - we can expect duplicates to be in a row
  If list is empty - was all duplicates - return null
  What about given an empty list?
    Return null
  Always get a valid head? Worry about other inputs?
  Will node values always be integers? Primitives?

DATA STRUCTURES:
  Linked List

EXAMPLE:
[1,1,2]
[1,1,1]
dummy -> null -> 1
prev -> dummy
curren -> 1
prev
ALGORITHM:
  High Level
    set dummy node to point to head as its next
    set previous to dummy
    set current node to point to head

    While current node is not null
    if next is same as current,
      While next is same as the current,
        remove the next by having current's next skip ahead to the next one
      reassign current to current.next
      reassign previous next to current

    return dummy.next OR null
*/


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

function removeDuplicates(head) {
  let dummy = new ListNode(0, head);
  let previous = dummy;
  let current = head;

  while (current !== null) {
    if (current.next !== null && current.next.val === current.val) {
      while (current.next !== null && current.next.val === current.val) {
        current.next = current.next.next;
      }
      current = current.next;
      previous.next = current;
    } else {
      previous = current;
      current = current.next;
    }
  }

  return dummy.next;
}

let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
let list2 = createLinkedList([1, 1, 1, 2, 3]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([1, 1, 1, 1, 1]);
let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);

printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
printLinkedList(removeDuplicates(list4)); // Expected: null
printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null
