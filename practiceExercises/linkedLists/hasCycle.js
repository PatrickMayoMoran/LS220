function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

// Hash table solution? don't think this is right - assumes unique values
function hasCycle(head) {
  let current = head;
  let seen = {};

  while (current !== null) {
    if (seen[current.val]) {
      return true;
    }
    else {
      seen[current.val] = true;
      current = current.next;
    }
  }

  return false;
}

console.log(hasCycle(list1)) // true
console.log(hasCycle(list2)) // true
console.log(hasCycle(list3)) // false
console.log(hasCycle(list4)) // true
console.log(hasCycle(list5)) // false

