class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function merge2SortedLists(list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  let dummy = { val: 0, next: null };
  let node = dummy;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }
    node = node.next;
  }
  if (list1) {
    node.next = list1;
  } else {
    node.next = list2;
  }
  return dummy.next;
}
function mergeKSortedLists(lists) {
  let k = lists.length;
  if (k === 0) {
    return null;
  }
  if (k === 1) {
    return lists[0];
  }
  let resultant = merge2SortedLists(lists[0], lists[1]);
  for (let i = 2; i < k; i++) {
    resultant = merge2SortedLists(resultant, lists[i]);
  }
  return resultant;
}
