class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
            this.length++;
        }
    }

    pop() {
        if (this.length === 0) {
            return;
        }
        else if (this.length === 1) {
            const pop = this.top;
            this.top = null;
            this.bottom = null;
            this.length--;
            return pop;
        }
        else {
            const pop = this.top;
            this.top = this.top.next;
            this.length--;
            return pop;
        }
    }

    isEmpty() {
        return this.length === 0;
    }
}

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// console.log(myStack.isEmpty());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.isEmpty());

class ArrayStack {
    constructor() {
        this.array = [];
        this.length = 0;        
    }

    peek() {
        return this.array[this.length-1];
    }

    push(value) {
        this.array.push(value);
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return;
        }
        this.length--;
        return this.array.pop();
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new ArrayStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.isEmpty());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());