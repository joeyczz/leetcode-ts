/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists?.length) return null;

  const curMap: { [key in string]: ListNode | null } = {};

  for (let i = 0; i < lists.length; i++) {
    curMap[i] = lists[i]!;
  }

  let node: ListNode | null = null;
  let lastNode: ListNode | null = node;
  while (!endNode(curMap)) {
    let minNode: ListNode | null = null;
    let minIndex;

    for (let i = 0; i < lists.length; i++) {
      const curNode = curMap[i];
      if (!curNode) continue;

      if (!minNode || curNode.val < minNode.val) {
        minNode = curNode;
        minIndex = i;
      }
    }

    if (!node) {
      node = minNode;
    } else {
      lastNode!.next = minNode;
    }
    lastNode = minNode;
    curMap[`${minIndex}`] = minNode!.next;
  }

  return node;
}

function endNode(map: { [key in string]: ListNode | null }) {
  let empty = true;
  for (let key in map) {
    if (map[key]) empty = false;
  }
  return empty;
}

(function () {
  // [[1,4,5],[1,3,4],[2,6]]
  const a = new ListNode(1, new ListNode(4, new ListNode(5)));
  const b = null;
  const c = new ListNode(2, new ListNode(6));
  const list: (ListNode | null)[] = [a, b, c];
  const result = mergeKLists(list);
  console.log(JSON.stringify(result));
})();
