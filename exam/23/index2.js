const { PriorityQueue } = require("../utils/index-priority.js");
const {
  createListNode,
  ListNode,
  listNodeToList,
} = require("../utils/list-node.js");

function mergeKLists(lists) {
  if (!lists || lists.length === 0) return null;

  const queue = new PriorityQueue({
    priorityFn: (a, b) => a.val < b.val,
  });

  for (let item of lists) {
    if (item) queue.add(item);
  }

  let node = new ListNode(0);
  let lastNode = node;
  while (!queue.isEmpty()) {
    const _n = queue.pool();
    lastNode.next = _n;
    lastNode = lastNode.next;

    if (_n && _n.next) queue.add(_n.next);
  }

  return node.next;
}

// [[1,4,5],[1,3,4],[2,6]]
const a = createListNode([1, 4, 5]);
// const a = new ListNode(1, new ListNode(4, new ListNode(5)));
const b = null;
const c = createListNode([2, 6]);
// const c = new ListNode(2, new ListNode(6));
const list = [a, b, c];
const result = mergeKLists(list);
console.log(listNodeToList(result));

exports.mergeKLists = mergeKLists;
