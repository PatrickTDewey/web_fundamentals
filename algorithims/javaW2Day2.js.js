class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
 class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head == null;
  }
  
  count() {
    let count = 0;
    let pointer = this.head;
    if (this.isEmpty()) {
      return null;
    }
    while (pointer != null) {
      pointer = pointer.next;
      count++;
    }
    return count;
  }

  enqueue(newVal) {
    // push newVal to end of Queue

    if (this.isEmpty()) {
      this.head = new Node(newVal);
      this.tail = this.head;
      return this;
    }

    let pointer = this.head
    while (pointer.next != null) {
      pointer = pointer.next;
    }

    pointer.next = new Node(newVal);
    this.tail = pointer.next;
    this.size++;
    return this;
    
  }

  dequeue() {
    // remove and return the data at the front of the queue
    let node = this.head;

    if (this.isEmpty()) {
      return null;
    }

    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return node.data;
    }

    this.head = this.head.next;
    this.size--;
    return node.data;
    
  }

  front() {
    // return the data at the front of the queue without removing
    if (this.isEmpty()) {
      return null;
    }
    return this.head.data;
  }
}

let myList = new Queue()
console.log(myList.enqueue(1));
console.log(myList.enqueue(2));
console.log(myList.enqueue(3));
console.log(myList.enqueue(6));

console.log(myList.dequeue());
console.log(myList.dequeue());
console.log(myList.dequeue());
console.log(myList.dequeue());

console.log("front", myList.front());
console.log(myList);
console.log(true + true === 1);
console.log(true/false);