# 学习JavaScript数据结构与算法（第三版）



## 队列和双端队列

### 队列数据结构

> 队列遵循**先进先出**（FIFO，也称为先来先服务）

#### 创建队列

```js
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
}
```


## 递归

### 理解递归

> 要理解递归，首先要理解递归

> 每个递归函数必须有**基础条件**,即一个不再递归调用的条件（**停止点**），以防止无限递归。