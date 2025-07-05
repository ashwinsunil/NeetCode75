class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function hasCycle(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
// Link nodes to form a list: 1 -> 2 -> 3 -> 4
node1.next = node2;
node2.next = node3;
node3.next = node4;
// Create a cycle: node4 -> node2
node4.next = node2;
console.log(hasCycle(node1));
