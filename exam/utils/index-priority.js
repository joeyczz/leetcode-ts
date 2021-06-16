"use strict";
exports.__esModule = true;
exports.PriorityQueue = void 0;
var defaultPriorityFn = function (a, b) {
  return a < b;
};
/**
 * 优先队列
 */
var PriorityQueue = /** @class */ (function () {
  function PriorityQueue(options) {
    var _a;
    this.vals = [];
    var _b = options !== null && options !== void 0 ? options : {},
      initial = _b.initial,
      priorityFn = _b.priorityFn;
    if (initial) (_a = this.vals).push.apply(_a, initial);
    this.fn =
      priorityFn !== null && priorityFn !== void 0
        ? priorityFn
        : defaultPriorityFn;
  }
  /**
   * 上浮调整
   */
  PriorityQueue.prototype.upAdjust = function () {
    if (this.vals.length <= 0) return;
    var childIndex = this.vals.length - 1;
    var parentIndex = Math.floor((childIndex - 1) / 2);
    // temp保存插入的叶子节点值，用于最后的赋值
    var temp = this.vals[childIndex];
    while (childIndex > 0 && this.fn(temp, this.vals[parentIndex])) {
      //无需真正交换，单向赋值即可
      this.vals[childIndex] = this.vals[parentIndex];
      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    this.vals[childIndex] = temp;
  };
  PriorityQueue.prototype.downAdjust = function () {
    if (this.vals.length <= 0) return;
    // temp保存父节点值，用于最后的赋值
    var parentIndex = 0;
    var temp = this.vals[parentIndex];
    var childIndex = 1;
    while (childIndex < this.vals.length) {
      // 如果有右孩子，且右孩子大于左孩子的值，则定位到右孩子
      if (
        childIndex + 1 < this.vals.length &&
        this.fn(this.vals[childIndex + 1], this.vals[childIndex])
      ) {
        childIndex++;
      }
      // 如果父节点大于任何一个孩子的值，直接跳出
      if (!this.fn(this.vals[childIndex], temp)) break;
      //无需真正交换，单向赋值即可
      this.vals[parentIndex] = this.vals[childIndex];
      parentIndex = childIndex;
      childIndex = 2 * childIndex + 1;
    }
    this.vals[parentIndex] = temp;
  };
  PriorityQueue.prototype.add = function (val) {
    this.vals.push(val);
    this.upAdjust();
  };
  PriorityQueue.prototype.pool = function () {
    if (this.vals.length <= 0) {
      return null;
    }
    var head = this.vals[0];
    this.vals[0] = this.vals[this.vals.length - 1];
    this.vals.pop();
    this.downAdjust();
    return head;
  };
  PriorityQueue.prototype.isEmpty = function () {
    return this.vals.length <= 0;
  };
  return PriorityQueue;
})();
exports.PriorityQueue = PriorityQueue;
