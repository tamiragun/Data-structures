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
    if (index <0 || index >= this.size || typeof index != "number") {
      return undefined;
    }
    // Declare variable to keep track of the node to return
    let currentNode = this.head;
    // Move down the list index times and update the node to return
    for (let i=0; i < index; i++) {
      currentNode = currentNode.next;   
    }
    // Return the node at the last position of the loop
    return currentNode;
  }

  // Set: given an index and value, will update the value of that node
  set(index, data) {
    // Make sure the input is valid
    if (index <0 || index >= this.size || typeof index != "number") {
      return undefined;
    }
    // Find variable to keep to update
    let currentNode = this.get(index);
    // Update the node at the last position of the loop
    currentNode.head = data;
    // Return the entire list
    return this;
  }

  // Insert: accepts an index and value and inserts a new node
  insert(index, data) {
    // Make sure the input is valid
    if (index <0 || index > this.size || typeof index != "number") {
      return undefined;
    }
    if (index == 0) {
      this.unshift(data);
    } else if (index == this.size) {
      this.push(data);
    } else {
      // Create a new node
      const nodeToInsert = new Node(data);
      // Find node to adapt
      let nodeToAdapt = this.get(index-1);
      // Store the rest of the list
      const restOfList = this.get(index);
      // Give the new node's next the rest of the list
      nodeToInsert.next = restOfList;
      // Give the node before the node to insert the new node as next
      nodeToAdapt.next = nodeToInsert;
      // Update the size of the list
      this.size++;
    }
    // Return the entire list
    return this;
  }

  // Remove: accepts an index removes the node at that index
  remove(index) {
    // Make sure the input is valid
    if (index <0 || index >= this.size || typeof index != "number") {
      return undefined;
    }
    // Check length of list
    if (index == 0) {
      this.shift();
    } else if (index == this.size - 1) {
      this.pop();
    } else {
      // Find node to adapt
      let nodeToAdapt = this.get(index-1);
      // Find the rest of the list
      const restOfList = this.get(index+1);
      // Replace the to adapt node with the new rest of list
      nodeToAdapt.next = restOfList;
      // Decrease the size of the list
      this.size--;
    }
    // Return the entire list
    return this;
  }

  // Print: prints all the nodes of the linked list
  printNodes() {
    console.log("All nodes:")
    for (let i=0; i< this.size; i++){
      console.log("  Node " + (i+1) + ": " + this.get(i).head);
    }
  }

  // Clear: removes all nodes from the linked list
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

    // Reverse

}


// Setting up the linked list:
let exampleList = new SinglyLinkedList();
exampleList.push("node1");
exampleList.push("node2");
exampleList.push("node3");
console.log("Original list: ");
console.log(exampleList);
console.log();
console.log("New output: \n");

// Testing push:
// console.log(exampleList.push("node4"));
// console.log(exampleList.push("node5"));
// console.log(exampleList.push("node6"));

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
// console.log(exampleList.get(4));
// console.log(exampleList.get(-1));
// console.log(exampleList.get("not an int"));

// Testing set:
// console.log(exampleList.set(0, "new data"));
// console.log(exampleList.set(1, "new data"));
// console.log(exampleList.set(2, "new data"));
// console.log(exampleList.set(3, "new data"));
// console.log(exampleList.set(4, "new data"));
// console.log(exampleList.set(-1, "new data"));
// console.log(exampleList.set("not an int", "new data"));

// Testing insert:
// console.log(exampleList.insert(0, "new node"));
// console.log(exampleList.insert(1, "new node"));
// console.log(exampleList.insert(2, "new node"));
// console.log(exampleList.insert(3, "new node"));
// console.log(exampleList.insert(4, "new node"));
// console.log(exampleList.insert(-1, "new node"));
// console.log(exampleList.insert("not an int", "new node"));

// Testing remove:
// console.log(exampleList.remove(0));
// console.log(exampleList.remove(1));
// console.log(exampleList.remove(2));
// console.log(exampleList.remove(3));
// console.log(exampleList.remove(4));
// console.log(exampleList.remove(-1));
// console.log(exampleList.remove("not an int"));

// Testing printNodes:
// exampleList.printNodes();







