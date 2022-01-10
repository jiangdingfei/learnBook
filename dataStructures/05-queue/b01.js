
export class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0; // 第一个元素
        this.items = {} // 队列
    }

    /**
     * 向队列尾部添加一个（或多个)新的项
     * @param {*} element 元素
     */
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    /**
     * 移除队列的第一项
     * @returns 被移除的元素
     */
    dequeue() {
        if (this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
     * 返回队列的第一个元素
     * @returns 队列的第一个元素
     */
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.count === this.lowestCount;
    }

    size() {
        return this.count - this.lowestCount;
    }
    /**
     * 清空队列
     */
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) return '';

        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}