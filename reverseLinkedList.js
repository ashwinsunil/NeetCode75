class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}
const head = new ListNode(
  0,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null)))),
);
// console.log(JSON.stringify(head));
// let copyHead = JSON.parse(JSON.stringify(head));
// console.log("copy: " + JSON.stringify(copyHead));
console.log(reverseLinkedList(head));
