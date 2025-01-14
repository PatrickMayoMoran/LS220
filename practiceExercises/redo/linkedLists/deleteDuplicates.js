/*
  Given the head of a sorted singly linked list, eliminate any duplicate elements, ensuring each value in the list is unique. The resulting linked list must remain sorted. Modify the linked list and return the head of the revised, duplicate-free list.

GOAL: return the linked list with duplicates removed

INPUT: linked list
OUTPUT: linked list

RULES QUESTIONS EXAMPLES
  Empty linked list? Yes, return it
  Always be integers in the nodes? Yes
  no argument given? No

DSA
  if head is null, return the head righ away
  while current node isn't null
    if current is the same as current.next
      while current is the same as current.next
        make current next skip to the next one
  slide current forward
*/

/*
function deleteDuplicates(head) {
  if (!head) return head;

  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      while (current.next !== null && current.val === current.next.val) {
        current.next = current.next.next;
      }
    }

    current = current.next;
  }

  return head;
}
*/

function deleteDuplicates(head) {
  if (!head) return head;

  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  
  return head;
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
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
      listStr += currentNode.val + ' -> ';
      currentNode = currentNode.next;
  }
  listStr += 'null'; // Indicate the end of the list
  console.log(listStr);
}

let list1 = createLinkedList([1, 1, 2]);
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"
