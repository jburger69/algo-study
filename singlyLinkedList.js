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

    // Push method -- Place new node at the end of the linked list

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

    // Pop method -- Remove node from the end of the list

    // if there are no nodes in the list, return undefined

    // Loop through the list until you reach the tail

    // set the next property of the 2nd to last node to be null

    // set the tail to be the 2nd to last node

    // decrement the length of the list by 1

    // return the value of the node removed

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // if no nodes are in list then set node head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Shift method -- Remove node from beginning of the list

    // if there are no nodes, return undefined

    // store the current head property in a variable

    // set the head property to be the current heads next property

    // decrement the length by 1

    // return the value of the node removed

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    // Unshift method -- Add node to beginning of list

    // This function should accept a value

    // Create a new node using the value passed to the function

    // If there is no head property on the list, set the head and tail to be the new node.

    // Otherwise set the newly created nodes next property to be the current head property on the list.

    // set the head property on the list to be that newly created node.

    // increment the length of the list by 1

    // return the linked list.

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Get method -- Grab node at specific index in list

    // This function should accept an index

    // if the index is less than zero or greater then or equal to the length of the list, return null.

    // Loop through the list until you reach the index and return the node at the specific index.

    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // Set method -- Change value of a node based on its position in the list

    // This function should accept value and an index

    // use your get function to find the specific node

    // if the node is not found, return false

    // if the node is found, set the value of that node to be the value passed to the function and return true

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    
}

var list = new SinglyLinkedList()
list.push("Hello")
console.log(list)
list.push("GoodBye")
console.log(list)
list.push("!")
console.log(list)
// list.pop()
// console.log(list)
// list.pop()
// console.log(list)
// list.pop()
// console.log(list)
// list.shift()
// console.log(list)
// list.unshift("First")
// console.log(list)
// console.log(list.get(0))
console.log(list.get(0))
list.set(0, "Hello!")
console.log(list.get(0))
