/*
  Given two sorted singly linked lists, your task is to combine them into a single sorted linked list. The new list should be composed of the nodes from the two original lists and should also be sorted in ascending order (where node values are equal to or increase as you move through the linked list).

ALGORITHM
  have dummy node with no next
  given head1 and head2

  have list1 at head1
  have list2 at head2
  have mergedList at dummy

  while both list1 and list2 aren't null
    compare values
      if list1 val is greater than list2
        mergedListnext assigned to list2
        list2 slides to list2 next
      if list1 is less than list2
        mergedListnext is list1
        slide. list1 to list1 next
  
  while list1 isn't null
    mergedList next is list1
    slide list1 forward
  
  while list2 isn't null
    mergedList next is list2
    slide list2 forward

  return dummy.next
*/

function mergeSortedLists(head1, head2) {
  let dummy = new ListNode(0);
  let list1 = head1;
  let list2 = head2;
  let newList = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2 = list2.next;
    }
    newList = newList.next;
  }

  newList.next = list1 === null ? list2 : list1;

  return dummy.next;
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
function printLinkedList(head) {
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> nul
