class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const map = new Map<TreeNode, number>();

function hasChild(root: TreeNode | null) {
  return root && (root.left || root.right);
}

function rob2(root: TreeNode | null): number {
  if (!root) return 0;
  if (map.has(root)) return map.get(root) || 0;
  if (!hasChild(root)) return root.val;

  let r = root.val;
  if (root.left && root.left.left) {
    r += rob2(root.left.left);
  }
  if (root.left && root.left.right) {
    r += rob2(root.left.right);
  }
  if (root.right && root.right.left) {
    r += rob2(root.right.left);
  }
  if (root.right && root.right.right) {
    r += rob2(root.right.right);
  }
  const max = Math.max(rob2(root.left) + rob2(root.right), r);
  // return
  map.set(root, max);
  return max;
}

(function () {
  console.time("d");

  const head = new TreeNode(
    3,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(3, null, new TreeNode(1))
  );
  // const head = new TreeNode(
  //   3,
  //   new TreeNode(4, new TreeNode(1), new TreeNode(3)),
  //   new TreeNode(5, null, new TreeNode(1))
  // );

  const result = rob2(head);
  console.log(result);
  console.timeEnd("d");
})();
