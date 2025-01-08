// Write a function reorderOddEven that rearranges nodes in
// a singly linked list so that all nodes at odd positions
// are grouped together, followed by all nodes at even positions.

// The function should take the head of the linked list as input
// and return the reordered list. The first node is considered
// to be at an odd position, the second node at an even position,
// and so on.

// Ensure that the relative order of nodes within the odd and
// even groups remains the same as in the original list.
// If the list is empty or contains only one node, return the
// original list.

// Example:
// Input: head = [1, 2, 3, 4, 5]
// Output: [1, 3, 5, 2, 4]
// Explanation: Nodes at odd positions (1, 3, 5) are grouped
//              first, followed by nodes at even positions (2, 4).

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
  RULES
    first node, head node, is considered odd - position 1
    empty or single node, return original

  Example
   [1, 2]

  ALGORITHM: 
    build two dummy lists: one of odd nodes, one of even nodes, and then 
      attach them at the end
      end of odd points at head of even
      end of even points at null

      current pointer starting at head
      lastOdd pointer for end of odd list also head
      first even pointer for beginning of even as head.next
      currentEven points at first Even

      slide current to current.next.next

      while current isn't null && current.next isn't null
        lastOdd next points at current
        currentEven next points at current.next (2 points at 4)
        current.next points to current.next.next (3 points at 5, 4 removed)
        
        currentEven slides to currentEven.next (2 slides to 4
        lastOdd slides to current (1 slides to 3)
        current slides to current.next (3 slides to 5 or null);

      lastOdd next points at firsteven

      return head

*/
/* ORIGINAL IMPLEMENTATION
function reorderOddEven(head) {
  if (head === null || head.next === null) return head;

  let current = head;
  let lastOdd = head;
  let firstEven = head.next;
  let currentEven = firstEven;

  current = current.next.next;

  while (current && current.next) {
    lastOdd.next = current;
    currentEven.next = current.next;
    current.next = current.next.next;

    currentEven = currentEven.next;
    lastOdd = current;
    current = current.next;
  }

  if (current) {
     currentEven.next = null;
     lastOdd.next = current;
     lastOdd = current;
   }

  lastOdd.next = firstEven;

  return head;
}
*/

// Own implementation of walkthrough
function reorderOddEven(head) {
  if (head === null || head.next === null) return head;

  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}

// Test cases
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([2, 1, 3, 5, 6, 4, 7]);
let list3 = createLinkedList([1, 2, 3, 4]);
let list4 = createLinkedList([1]);
let list5 = createLinkedList([1, 2]);
let list6 = createLinkedList([]);

console.log("Original lists:");
printLinkedList(list1);
printLinkedList(list2);
printLinkedList(list3);
printLinkedList(list4);
printLinkedList(list5);
printLinkedList(list6);

console.log("\nAfter reordering odd and even positions:");
printLinkedList(reorderOddEven(list1)); // Expected: 1 -> 3 -> 5 -> 2 -> 4 -> null
printLinkedList(reorderOddEven(list2)); // Expected: 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4 -> null
printLinkedList(reorderOddEven(list3)); // Expected: 1 -> 3 -> 2 -> 4 -> null
printLinkedList(reorderOddEven(list4)); // Expected: 1 -> null
printLinkedList(reorderOddEven(list5)); // Expected: 1 -> 2 -> null
printLinkedList(reorderOddEven(list6)); // Expected: null
