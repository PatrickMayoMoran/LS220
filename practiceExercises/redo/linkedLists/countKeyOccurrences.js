/*
  Given a singly linked list and a specific value (referred to as the 'key'), your task is to determine how many times this key appears within the linked list. For instance, given a linked list like 1->2->1->2->1->3->1 and a key of 1, the expected result would be 4, as the key 1 appears four times in the list.

GOAL: Return the number of times a certain key appears in the given linked list

INPUT: linked list and an integer
OUTPUT: intger

RULES, EXAMPLES, QUESTIONS
  Input
    Could get a linked list, answer is 0
    Linked list values always positive integers? No, could be any primitive
    Key? Also could be any primitive
    Not get a key? No, key will always be given
    Not get a linked list? No, list will always be given
    More than one linked list or more than one key? No, one of each

    Linked List:
      would I ever get a cyclical list? No
      Always be one directional? Yes,
      could primitive values include null or is null end of list? 
        null is end of list

DSA
  given linked list

ALGORITHM
  initialize count

  initialize a current node at the head
  while current is not null
    if current value equals key, incremenet count
    current becomes current.next

  return count
*/

function countKeyOccurrences(head, key) {
  let count = 0;
  if (!head) return count;

  let current = head;

  while (current !== null) {
    if (current.val === key) count++;
    current = current.next;
  }

  return count;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
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

let list1 = createLinkedList([1, 2, 1, 2, 1, 3, 1]);
let list2 = createLinkedList([4, 4, 4, 4]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([5, 5, 1, 2, 3, 5, 5]);
let list5 = createLinkedList([]);
let list6 = createLinkedList([1, 2, 3, 1, 1]);

console.log(countKeyOccurrences(list1, 1) === 4);
console.log(countKeyOccurrences(list2, 4) === 4);
console.log(countKeyOccurrences(list3, 1) === 1);
console.log(countKeyOccurrences(list4, 5) === 4);
console.log(countKeyOccurrences(list5, 1) === 0);
console.log(countKeyOccurrences(list6, 1) === 3);

// All test cases should log true.
