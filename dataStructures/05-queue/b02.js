// 双端队列
import { Queue } from './b01.js';

export class Deque extends Queue {
    constructor() {
        super()
    }

    /**
     * 在双端队列的后端添加新的元素
     * @param {any} element 待添加的元素
     */
    addBack(element) {
        // this.items[this.count] = element;
        // this.count++;
        super.enqueue(element)
    }
    /**
     * 在双端队列的前端添加新的元素
     * @param {any} element 新的元素
     */
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i-i];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    removeFront() {
        return super.dequeue()
    }

    removeBack() {
        if (super.isEmpty()) return undefined;
        const result = this.items[this.count-1];
        delete this.items[this.count-1];
        this.count--;
        return result;
    }

    peekFront() {
        return super.peek();
    }

    peekBack() {
        if(super.isEmpty()) return undefined;
        return this.items[this.count];
    }
}