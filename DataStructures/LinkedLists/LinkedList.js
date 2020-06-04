
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    // Function that is run when making an instance of the class
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) {
            this.append(value);
            this.length++;
        }
        else if (index <= 0) {
            this.prepend(value);
            this.length++;
        }
        else {
            const newNode = new Node(value);
            let leader = this.traverseToIndex(index);
            newNode.next = leader.next;
            leader.next = newNode;
            this.length++;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            console.log("Index out of bounds")
        }
        else if (index === 0) {
            this.head = this.head.next;
            this.length--;
        }
        else {
            let leader = this.traverseToIndex(index);
            leader.next = leader.next.next;
            this.length--;
        }
    }

    // Returns the node right before the index location in the linked list
    traverseToIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    reverse() {
        if (this.length === 1) {
            return;
        }
        let currentNode = this.head;
        this.tail = this.head;
        let nextNode = currentNode.next;
        while (nextNode) {
            const temp = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = temp;
        }
        this.head.next = null;
        this.head = currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
}

const myLinkedList = new SinglyLinkedList(4);
myLinkedList.append(6);
myLinkedList.append(7);
myLinkedList.append(8);
myLinkedList.prepend(3);
myLinkedList.insert(2, 5);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();



class DoubleNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new DoubleNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new DoubleNode(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new DoubleNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) {
            this.append(value);
            this.length++;
        }
        else if (index <= 0) {
            this.prepend(value);
            this.length++;
        }
        else {
            const newNode = new DoubleNode(value);
            let leader = this.traverseToIndex(index);
            let nextNode = leader.next;
            newNode.next = nextNode;
            newNode.prev = leader;
            nextNode.prev = newNode;
            leader.next = newNode;
            this.length++;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            console.log("Index out of bounds")
        }
        else if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        }
        else {
            let leader = this.traverseToIndex(index);
            leader.next = leader.next.next;
            this.length--;
        }
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    printListBackward() {
        const array = [];
        let currentNode = this.tail;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.prev;
        }
        console.log(array);
    }
}

const myDoublyLinkedList = new DoublyLinkedList(4);
myDoublyLinkedList.append(6);
myDoublyLinkedList.append(7);
myDoublyLinkedList.append(8);
//myDoublyLinkedList.printList();
myDoublyLinkedList.prepend(3);
//myDoublyLinkedList.printList();
myDoublyLinkedList.insert(2, 5);
//myDoublyLinkedList.printList();
myDoublyLinkedList.remove(0)
//myDoublyLinkedList.printListBackward();
//console.log(myDoublyLinkedList);
//myLinkedList.remove(5);