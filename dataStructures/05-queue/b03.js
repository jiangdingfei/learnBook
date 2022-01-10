// 使用队列和双端对了来解决问题
import { Queue } from "./b01.js";
import { Deque } from './b02.js';

// 5.3.1 循环队列----击鼓传花游戏
function hotPotato(elementsList, num) {
	const queue = new Queue();
	const elimitatedList = [];

	for (let i = 0; i < elementsList.length; i++) {
		queue.enqueue(elementsList[i]);
	}

	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		elimitatedList.push(queue.dequeue());
	}

	return {
		elimitatedList,
		winner: queue.dequeue()
	}
}

// 5.3.2 回文检查器
function palindromeChecker(aString) {
	if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
		return false
	}

	const deque = new Deque();
	const lowerString = aString.toLocaleLowerCase().split(' ').join('');
	let isEqual = true;
	let firstChar,lastChar;

	for (let i = 0; i < lowerString.length; i++) {
		deque.addBack(lowerString.charAt(i));
	}

	while (deque.size() > 1 && isEqual) {
		firstChar = deque.removeFront();
		lastChar = deque.removeBack();
		if (firstChar !== lastChar) isEqual = false;
	}

	return isEqual;
}

console.log(palindromeChecker('abccba'))