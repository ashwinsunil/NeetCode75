class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function removeNode(head, n) {
  let count = 0;
  let temp = head;
  while (temp) {
    count++;
    temp = temp.next;
  }
  if (count === 1 && n === 1) {
    return null;
  }
  const nodeToBeRemoved = count - n;
  if (nodeToBeRemoved === 0) {
    return head.next;
  }
  count = 0;
  temp = head;
  let prev = head;

  while (count !== nodeToBeRemoved && temp.next) {
    count++;
    prev = temp;
    temp = temp.next;
  }
  if (temp) {
    prev.next = temp.next;
  }
  return head;
}
console.log(
  JSON.stringify(
    removeNode(
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
      2,
    ),
  ),
);
