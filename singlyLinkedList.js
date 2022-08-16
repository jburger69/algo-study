// Single Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push method

    // This function should accept a value

    // Create new node using the value passed to the function

    // if there is no head property on the list, set the head and the tail to be the new created node

    // Otherwise set the next property on the tail to be the new node,
    // and set the tail property on the list to be the new created node.

    // increament the length by one

    // Return linked list

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    
}

var list = new SinglyLinkedList()
list.push("Hello")
console.log(list)
list.push("How are you?")
console.log(list)