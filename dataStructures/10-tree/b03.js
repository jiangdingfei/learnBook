// 创建BinarySearchTree

export class Node {
    constructor(key) {
        this.key = key; // 节点值
        this.left = null; // 左侧子节点引用
        this.right = null; // 右侧子节点引用
    }
}

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // 用来比较节点值
        this.root = null; // Node类型的根节点
    }
}