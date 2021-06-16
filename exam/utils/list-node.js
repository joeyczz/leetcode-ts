"use strict";
exports.__esModule = true;
exports.listNodeToList = exports.expandListNode = exports.createListNode = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  return ListNode;
})();
exports.ListNode = ListNode;
var createListNode = function (list) {
  if (!list || list.length <= 0) {
    return null;
  }
  var preHead = new ListNode(-1);
  var cur = preHead;
  for (var i = 0; i < list.length; i++) {
    cur.next = new ListNode(list[i]);
    cur = cur.next;
  }
  return preHead.next;
};
exports.createListNode = createListNode;
var expandListNode = function (a, b) {
  if (a === null) return b;
  var lastNode = a;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  lastNode.next = b;
  return a;
};
exports.expandListNode = expandListNode;
var listNodeToList = function (head) {
  var list = [];
  var cur = head;
  while (cur) {
    list.push(cur.val);
    cur = cur.next;
  }
  return list;
};
exports.listNodeToList = listNodeToList;
