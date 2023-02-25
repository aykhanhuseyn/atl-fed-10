// array
// [0,1,2,3,4]
// search O(n)
// [0,1,3,4] O(n)

// singly linked list
// ayxan => orxan => serxan => elxan
// search O(n)
// ayxan => serxan => elxan O(1)
// add O(1)

// doubly linked list
// ayxan <==> orxan <==> serxan <==> elxan

// hash table
// key => hash of key => 123345
// array[hash] = value
// Map
// add O(1)

class SinglyLinkedList<T> {
	value: T;
	next: SinglyLinkedList<T>;
	// prev?: SinglyLinkedList;
	constructor(value: T) {
		this.value = value;
	}
}

const sll1 = new SinglyLinkedList('1');
const sll2 = new SinglyLinkedList('2');
const sll3 = new SinglyLinkedList('3');

sll1.next = sll2;
sll2.next = sll3;

let sll = sll1;
while (sll.next) {
	sll = sll.next;
}

// binary tree
class Binary<T> {
	value: T;
	left: Binary<T>;
	right: Binary<T>;
	constructor(value: T) {
		this.value = value;
	}
}

const a = new Binary(1);
a.left = new Binary(2);
a.right = new Binary(3);
a.left.left = new Binary(4);

// LIFO => last in, first out
// FIFO => first in, first out

// STACK => LIFO
// Call Stack

// // browser => process
// // tab => session
// anonymous
// binary
// binary
// binary

const stack: number[] = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3

// QUEUE => FIFO
const queue: number[] = [];
queue.unshift(1); // [1]
queue.unshift(2); // [2, 1]
queue.unshift(3); // [3, 2, 1]
queue.pop(); // 1 // [3, 2]

queue.push(1); // [1]
queue.push(2); // [1, 2]
queue.push(3); // [1, 2, 3]
queue.shift(); // 1 // [2, 3]
