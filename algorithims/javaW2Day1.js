class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLStack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  size() {
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
  
  push(newVal) {
    let node = new Node(newVal);
    if (this.isEmpty()) {
      this.head = node;
      return this;
    }
    // push newVal to top of stack
    let pointer = this.head;
    while (pointer.next != null) {
      pointer = pointer.next;
    }
    pointer.next = node;
    return this;

  }

  pop() {
    // remove and return data at top of stack
    let poppedNode;
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.next == null) {
      poppedNode = this.head;
      this.head = null;
      return poppedNode.data;
    }
    let pointer = this.head;
    while (pointer.next.next != null) {
      pointer = pointer.next;
    }
    poppedNode = pointer.next;
    pointer.next = null;
    return poppedNode.data;
  }

  peek() {
    // return data at top of stack without removing
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.next == null) {
      return this.head.data;
    }
    let pointer = this.head;
    while(pointer.next != null){
      pointer = pointer.next;
    }
    return pointer.data;
  }

  // EXTRA
  contains(value) {
    // return true if SLStack contains value
    // return false if SLStack does not contain value
    if (this.isEmpty()) {
      return false;
    }
    let pointer = this.head;
    while (pointer != null) {
      if (pointer.data === value) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  // EXTRA
  print() {
    // print out the values of the SLStack
    if (this.isEmpty()) {
      return null;
    }
    let pointer = this.head
    while (pointer != null) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
  }
}

let myStack = new SLStack();
myStack.push(3)
myStack.push(1)
myStack.push(4)
// console.log(myStack);
// myStack.print();
// console.log(myStack.size());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.peek());
// console.log(myStack.contains(1));
// console.log(myStack.contains(4));
// console.log(myStack.contains(3));
