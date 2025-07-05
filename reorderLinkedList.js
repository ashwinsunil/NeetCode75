class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function reorderLinkedList(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // Reverse Linked List
  let prev = null;
  let current = slow;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  let first = head;
  let last = prev;
  while (first && last && first !== last && first.next !== last) {
    let tempLast = last.next;
    let temp = first.next;
    first.next = last;
    last.next = temp;
    last = tempLast;
    first = temp;
  }
  return head;
}
const list = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(8))));
console.log(JSON.stringify(reorderLinkedList(list)));
