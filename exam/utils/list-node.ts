export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const createListNode = (list: number[]): ListNode | null => {
  if (!list || list.length <= 0) {
    return null;
  }
  const preHead = new ListNode(-1);

  let cur = preHead;
  for (let i = 0; i < list.length; i++) {
    cur.next = new ListNode(list[i]);
    cur = cur.next;
  }
  return preHead.next;
};

export const expandListNode = (a: ListNode | null, b: ListNode | null) => {
  if (a === null) return b;
  let lastNode = a;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  lastNode.next = b;
  return a;
};

export const listNodeToList = (head: ListNode | null) => {
  const list = [];
  let cur = head;
  while (cur) {
    list.push(cur.val);
    cur = cur.next;
  }
  return list;
};
