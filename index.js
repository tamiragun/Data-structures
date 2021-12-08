// Singly linked list
// A data structure where each element is a separate object that contains a pointer or a link to the next object in that list

// A class to create a single node
class Node {
  constructor(data){
    this.head = data;
    this.next = null;
  }
}

// A class to create a singly linked list of nodes, with associated methods
class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  // Push: adds a node to the end of the list
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      // while (true) {
      //   let tempNode = this.head.next;
      //   if (!tempNode) {
      //     tempNode = new Node(data);
      //     break;
      //   }
      //   tempNode= tempNode.next;
      // }
    }
    this.size++;
    return this;
  }

  // Pop: removes the node at the end of the list
  pop() {
    if (!this.head) {
      return this;
    } else {
       let currentNode = this.head;
       let newTail = currentNode;
       while (currentNode.next) {
         newTail = currentNode;
         currentNode = currentNode.next;
       }
        this.tail = newTail;
        this.tail.next = null;
        this.size--;

        if (this.size === 0 ) {
          this.head = null;
          this.tail = null;
        }
    }
    return this;
  }

  // Shift: remove from the head of the list
  shift() {
    if (!this.head) {
      
      return this;
    } else { 
      let nextNode = this.head.next;
      if (this.head.next) {
        this.head = nextNode;
        this.head.next = nextNode.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.size--;
    }
    return this;
  }

  // Unshift: insert a node to the beginning of the list
  unshift(data) {
    const newFirstNode = new Node(data);
    if (!this.head) {
      this.head = newFirstNode;
      this.tail = newFirstNode;
    } else {
      const oldFirstNode = this.head;
      newFirstNode.next = oldFirstNode;
      this.head = newFirstNode;
    }
    this.size++;
    return this;
  }

  // Get: retrieves a value at a given index
  get(index) {
    // Make sure the input is valid
    if (index <0 || typeof index != "number") {
      return undefined;
    }
    // Declare variable to keep track of the node to return
    let currentNode = this.head;
    // Move down the list index times and update the node to return
    for (let i=0; i < index; i++) {
      if (currentNode.next) {
        currentNode = currentNode.next;   
        // If index is out of bounds, return undefined
      } else {
        return undefined;
      }
    }
    // Return the node at the last position of the loop
    return currentNode;
  }

  // Set: given an index and value, will update the value of that node
  // Insert: accepts an index and value and inserts a new node
  // Remove: accepts an index removes the node at that index
  // Reverse

  // Clear: removes all nodes from the linked list
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

}


// Setting up the linked list:
let exampleList = new SinglyLinkedList();

// Testing push:
console.log(exampleList.push("node1"));
console.log(exampleList.push("node2"));
console.log(exampleList.push("node3"));
console.log();

// Testing pop:
//console.log(exampleList.pop());
//console.log(exampleList.pop());
//console.log(exampleList.pop());
//console.log(exampleList.pop());

// Testing shift:
// console.log(exampleList.shift());
// console.log(exampleList.shift());
// console.log(exampleList.shift());
// console.log(exampleList.shift());

// Testing unshift:
// console.log(exampleList.unshift("node4"));
// console.log(exampleList.unshift("node5"));

// Testing get:
// console.log(exampleList.get(0));
// console.log(exampleList.get(1));
// console.log(exampleList.get(2));
// console.log(exampleList.get(3));
// console.log(exampleList.get(-1));
// console.log(exampleList.get("a"));





