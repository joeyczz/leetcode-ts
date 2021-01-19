// Definition for singly-linked list.
(function () {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    let p = 0;
    const head = new ListNode(0);
    let node = head;
    let a = l1;
    let b = l2;
    while (a || b) {
      const aval = a?.val ?? 0;
      const bval = b?.val ?? 0;

      const total = p + aval + bval;

      if (total >= 10) {
        p = 1;
        node.next = new ListNode(total % 10);
      } else {
        p = 0;
        node.next = new ListNode(total);
      }
      a = a?.next;
      b = b?.next;
      node = node.next;
    }

    if (p == 1) {
      node.next = new ListNode(1);
    }

    return head.next;
  }

  (function () {
    // 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
        )
      )
    );

    const l2 = new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9)))
    );
    const result = addTwoNumbers(l1, l2);
    console.log(result);
  })();
})();
