class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() { // Gets first item in the queue
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
            this.length++;
        }
    }

    dequeue() {
        if (this.length === 0) {
            return;
        }
        else if (this.length === 1) {
            const out = this.first;
            this.first = null;
            this.last = null;
            this.length--;
            return out;
        }
        else {
            const out = this.first;
            this.first = this.first.next;
            this.length--;
            return out;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    print() {
        let currentNode = this.first;
        console.log("First");
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log("Last");
    }
}

let myQueue = new Queue();
myQueue.enqueue("Sam");
myQueue.enqueue("Ashley");
myQueue.enqueue("Tim");
myQueue.print();
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());