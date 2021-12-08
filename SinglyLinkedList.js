// Singly linked list
// A data structure where each element is a separate object that contains a pointer or a link to the next object in that list

// Heavily relied on the following resource for the first few methods, after that it is all my own. https://javascript.plainenglish.io/linked-list-implementation-in-javascript-ca0d3038f797

// A class to create a single node
class Node {
  // Each node gets a head and a link to the next node
  // Initialise the node as not having anything to link to yet, only has data in the head
  constructor(data){
    this.head = data;
    this.next = null;
  }
}

// A class to create a singly linked list of nodes, with associated methods
class SinglyLinkedList {

  // Constructor sets the head, tail and size as empty.
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  // Push: adds a node to the end of the list
  push(data) {
    // Create a new node with the provided data
    const newNode = new Node(data);
    // If the linked list is empty, just update the head to be the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    // Else, find the last node and add the new node into its tail
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment the size of the linked list
    this.size++;
    // Return the full list
    return this;
  }

  // Pop: removes the node at the end of the list
  pop() {
    if (!this.head) {
      // If the linked list is empty, do nothing and just return
      return this;
    } else {
       // Declare counter to keep track of which node we're on
       let currentNode = this.head;
       // Declare variable to keep track of the last node in the list
       let newTail = currentNode;
       
       // Loop through the whole list until we find the last element
       while (currentNode.next) {
         // Up[date the interim last element in the list]
         newTail = currentNode;
         // Increment the coutner
         currentNode = currentNode.next;
       }

        // After the loop, we have the final last element in newTail
        // Update the tail to be this last element
        this.tail = newTail;
        this.tail.next = null;

        // Decrement the size of the linked list
        this.size--;

        // If we have popped the last element of the list, reset it to have null as head and tail.
        if (this.size === 0 ) {
          this.head = null;
          this.tail = null;
        }
    }
    // Return the full list
    return this;
  }

  // Shift: remove from the head of the list
  shift() {
    // If the linked list is empty, do nothing and just return
    if (!this.head) {
      return this;
    } else { 
      let nextNode = this.head.next;
      // If there is a second node, set that node as the new head
      if (this.head.next) {
        this.head = nextNode;
        this.head.next = nextNode.next;
        // If there is no second node, jsut reset the head and tail to null so we have an empty linked list.
      } else {
        this.head = null;
        this.tail = null;
      }
      // Decrement the size of the linked list
      this.size--;
    }
    // Return the full list
    return this;
  }

  // Unshift: insert a node to the beginning of the list
  unshift(data) {
    // Create a new node with the given data
    const newFirstNode = new Node(data);
    // If the list is empty, just replace the head and tail with this node.
    if (!this.head) {
      this.head = newFirstNode;
      this.tail = newFirstNode;
    // Otherwise, replace the head with the new node and insert the old head into the new node's next
    } else {
      // Store in a temporary variable
      const oldFirstNode = this.head;
      // Set it as the next of the new node
      newFirstNode.next = oldFirstNode;
      // Replace the original head with the new node
      this.head = newFirstNode;
    }
    // Increment the size of the linkedList
    this.size++;
    // Return the full list
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
    // reset everything to null/zero
    this.head = null;
    this.tail = null;
    this.size = 0;
    // Return the entire list
    return this;
  }

  // Reverse: reverses all the nodes' order

}

module.exports = SinglyLinkedList;