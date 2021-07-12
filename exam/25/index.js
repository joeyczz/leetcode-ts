const {
  createListNode,
  ListNode,
  listNodeToList,
} = require("../utils/list-node.js");

function reverse(head, k) {
  if (!head || k < 2) return head;
  let cur = head;
  let h = cur;
  let i = 1;
  while (cur.next && i < k) {
    i++;
    const ne = cur.next;
    cur.next = ne.next;
    ne.next = h;
    h = ne;
  }
  return h;
}

function reverseKGroup(head, k) {
  if (k < 2 || !head) return head;
  const h = new ListNode(0);

  let cur = head;
  let start = cur;
  let lastH = h;
  let i = 0;
  while (cur) {
    i++;
    if (i >= k) {
      i = 0;
      const nS = cur.next;
      lastH.next = reverse(start, k);
      lastH = start;
      start = nS;
      cur = nS;
      continue;
    }
    cur = cur.next;
  }
  if (i < k) {
    lastH.next = start;
  }

  return h.next;
}

console.time("d");
const node = createListNode([1, 2, 3, 4, 5]);
const result = reverseKGroup(node, 3);
console.log(listNodeToList(result));
console.timeEnd("d");

module.exports = reverseKGroup;
