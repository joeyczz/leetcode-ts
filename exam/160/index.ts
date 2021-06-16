import {
  ListNode,
  createListNode,
  listNodeToList,
  expandListNode,
} from "../utils/list-node";
// const { ListNode, createListNode } = require("../list-node");
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) return null;
  const aLen = getLen(headA);
  const bLen = getLen(headB);
  let aCur: ListNode | null = headA;
  let bCur: ListNode | null = headB;
  let minLen = aLen;
  if (aLen > bLen) {
    minLen = bLen;
    aCur = skipNext(aCur, aLen - bLen);
  } else if (aLen < bLen) {
    minLen = aLen;
    bCur = skipNext(bCur, bLen - aLen);
  }
  let step = 0;
  while (step < minLen && aCur && bCur) {
    if (aCur === bCur) return aCur;
    aCur = aCur.next;
    bCur = bCur.next;
    step += 1;
  }

  return null;
}

function skipNext(head: ListNode | null, num: number = 1) {
  let step = 0;
  let cur = head;
  while (step < num && cur) {
    step += 1;
    cur = cur.next;
  }
  return cur;
}

function getLen(head: ListNode | null) {
  let count = 0;
  let cur = head;
  while (cur) {
    count += 1;
    cur = cur.next;
  }
  return count;
}

(function () {
  console.time("d");
  const com = createListNode([8, 4, 5]);
  const a = expandListNode(createListNode([4, 1]), com);
  const b = expandListNode(createListNode([5, 0, 1]), com);
  const result = getIntersectionNode(a, b);
  console.log(listNodeToList(result));
  console.timeEnd("d");
})();

export default {};
