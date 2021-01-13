(function () {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(-1, head);

    let first = head;
    let second = dummy;
    for (let i = 0; i < n; i++) {
      first = first.next;
    }

    while (first) {
      first = first.next;
      second = second.next;
    }

    second.next = second.next.next;
    return dummy.next;
  }

  (function () {
    // [1,2,3,4,5]
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const result = removeNthFromEnd(head, 2);
    console.log(JSON.stringify(result));
  })();
})();
