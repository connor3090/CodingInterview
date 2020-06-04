class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        let inserted = false;
        while (!inserted) {
            if (value >= currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    inserted = true;
                    return;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
            else {
                
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    inserted = true;
                    return;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;
        while(true) {
            if (currentNode === null) {
                return false;
            }
            else if (currentNode.value == value) {
                return currentNode;
            }
            else {
                if (value > currentNode.value) {
                    currentNode = currentNode.right;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
        }
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let isRoot = this.root.value == value;
        let prevNode;
        let loc;
        while (true) {
            if (currentNode === null) {
                return false;
            }
            else if (currentNode.value == value) {
                break;
            }
            else {
                if (value > currentNode.value) {
                    prevNode = currentNode;
                    currentNode = currentNode.right;
                }
                else {
                    prevNode = currentNode;
                    currentNode = currentNode.left;
                }
            }
        }

        if (this.checkNumChildren(currentNode) === 0) {
            if (isRoot) {
                this.root = null;
                return true;
            }
            if (prevNode.right.value == currentNode.value) {
                prevNode.right = null;
                return true;
            }
            else if (prevNode.left.value == currentNode.value) {
                prevNode.left = null;
                return true;
            }

            
        }
        else if (this.checkNumChildren(currentNode) === 1) {
            if (isRoot) {
                if (currentNode.right) {
                    this.root = currentNode.right;
                    return true;
                }
                else {
                    this.root = currentNode.left;
                    return true;
                }
            }

            if (prevNode.right.value == currentNode.value) {
                if (currentNode.right) {
                    prevNode.right = currentNode.right;
                    return true
                }
                else {
                    prevNode.right = currentNode.left;
                    return true;
                }
            }
            else if (prevNode.left.value == currentNode.value) {
                if (currentNode.right) {
                    prevNode.left = currentNode.right;
                    return true;
                }
                else {
                    prevNode.left = currentNode.left;
                    return true;
                }
            }
        }
        else {
            let deleteNode = currentNode;
            let prevSuccessorNode = currentNode;
            currentNode = currentNode.right;
            while (currentNode.left) {
                prevSuccessorNode = currentNode;
                currentNode = currentNode.left;
            }
            
            if (isRoot) {
                currentNode.left = this.root.left;
                currentNode.right = this.root.right;
                this.root = currentNode;
                return true;
            }
            if (prevNode.right.value == deleteNode.value) {
                currentNode.right = deleteNode.right;
                currentNode.left = deleteNode.left;
                prevNode.right = currentNode;
                if (prevSuccessorNode.right) {
                    if (prevSuccessorNode.right.value == currentNode.value) {
                        prevSuccessorNode.right = null;
                    }
                    
                }
                else {
                    prevSuccessorNode.left = null;
                }
                
            }
            else if (prevNode.left.value == deleteNode.value) {
                currentNode.right = deleteNode.right;
                currentNode.left = deleteNode.left;
                prevNode.left = currentNode;

                if (prevSuccessorNode.right) {
                    if (prevSuccessorNode.right.value == currentNode.value) {
                        prevSuccessorNode.right = null;
                    }

                }
                else {
                    prevSuccessorNode.left = null;
                }
            }

        }



    }

    checkNumChildren(node) {
        if (node.left === null && node.right === null) {
            return 0;
        }
        else if (node.left !== null && node.right !== null) {
            return 2;
        }
        else {
            return 1;
        }
    }
}

function traverse(node) {
    const tree = {value: node.value };
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}

//          9
//      4       20
//    1   6   15   170
const tree = new BinarySearchTree();
tree.remove(1);
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(5);
tree.insert(169);
tree.insert(168);
tree.insert(167);
tree.insert(178);
tree.insert(177);
tree.insert(176);
tree.remove(199)
console.log(tree.root);
