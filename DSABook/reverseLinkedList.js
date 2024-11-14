class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  if (!head) {
    return head;
  }

  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextNode = curr.next; // hold on to next
    curr.next = prev;         // point backwards aka reverse
    prev = curr;              // slide prev pointer forward
    curr = nextNode;          // slide curr pointer forward
  }

  return prev;                // once curr is null, return prev which is new head
}

// Helper function to print the linked list
function printList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

// Test case 1
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);

console.log("Input: ", printList(head1));
console.log("Output:", printList(reverseLinkedList(head1)));
// Input:  1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null
