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

  function swapPairs(head: ListNode | null): ListNode | null {
    const h = new ListNode(0, head);
    let pre: ListNode | null = h;
    while (pre) {
      console.log(pre);
      const _n1: ListNode | null = pre.next;
      if (!_n1) break;
      const _n2: ListNode | null = _n1.next;
      if (!_n2) break;

      pre.next = _n2;
      const _n: ListNode | null = _n2.next;
      _n2.next = _n1;
      _n1.next = _n;

      pre = _n1;
    }

    return h.next;
  }

  console.time("d");
  // [1,2,3,4]
  const node = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4)))
  );
  const result = swapPairs(node);
  console.log(result);
  console.timeEnd("d");
})();
