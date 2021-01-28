(function () {
  // Definition for singly-linked list.
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    if (!l1) return l2;
    if (!l2) return l1;

    let node, node2;
    if (l1.val < l2.val) {
      node = l1;
      node2 = l2;
    } else {
      node = l2;
      node2 = l1;
    }
    let cur = node;

    while (node2) {
      if (!cur.next) {
        cur.next = node2;
        node2 = null;
        continue;
      }

      if (cur.next.val < node2.val) {
        cur = cur.next;
        continue;
      }

      if (cur.next.val >= node2.val) {
        const tmp = node2.next;
        node2.next = cur.next;
        cur.next = node2;
        cur = cur.next;
        node2 = tmp;
        continue;
      }
    }
    return node;
  }

  (function () {
    console.time("d");
    // [1, 2, 4][1, 3, 4];
    const a = new ListNode(1, new ListNode(2, new ListNode(4)));
    const b = new ListNode(1, new ListNode(3, new ListNode(4)));
    const result = mergeTwoLists(a, b);
    console.log(result);
    console.timeEnd("d");
  })();
})();
