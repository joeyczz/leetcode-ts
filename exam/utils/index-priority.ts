interface PriorityQueueOptions<T> {
  initial?: T[];
  priorityFn?: (a: T, b: T) => boolean;
}

const defaultPriorityFn = (a: any, b: any) => a < b;

/**
 * 优先队列
 */
export class PriorityQueue<T> {
  vals: T[] = [];

  fn: (a: T, b: T) => boolean;

  constructor(options?: PriorityQueueOptions<T>) {
    const { initial, priorityFn } = options ?? {};
    if (initial) this.vals.push(...initial);
    this.fn = priorityFn ?? defaultPriorityFn;
  }

  /**
   * 上浮调整
   */
  upAdjust() {
    if (this.vals.length <= 0) return;
    let childIndex = this.vals.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    // temp保存插入的叶子节点值，用于最后的赋值
    const temp = this.vals[childIndex];

    while (childIndex > 0 && this.fn(temp, this.vals[parentIndex])) {
      //无需真正交换，单向赋值即可
      this.vals[childIndex] = this.vals[parentIndex];
      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    this.vals[childIndex] = temp;
  }

  downAdjust() {
    if (this.vals.length <= 0) return;
    // temp保存父节点值，用于最后的赋值
    let parentIndex = 0;
    let temp = this.vals[parentIndex];

    let childIndex = 1;
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
  }

  add(val: T) {
    this.vals.push(val);
    this.upAdjust();
  }

  pool() {
    if (this.vals.length <= 0) {
      return null;
    }

    const head = this.vals[0];

    this.vals[0] = this.vals[this.vals.length - 1];
    this.vals.pop();

    this.downAdjust();
    return head;
  }

  isEmpty() {
    return this.vals.length <= 0;
  }
}
