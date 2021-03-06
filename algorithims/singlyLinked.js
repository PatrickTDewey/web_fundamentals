/* 
    Two challenges!

    addToFront: Write a method of the SLList class that accepts a value, and adds a node with that 
    value to the front of the list. 
    
    Steps:
        1. Create a new node
        2. Assign that node's next attribute to the list's current head
        3. Assign the list's current head to the new node

    KEEP IN MIND: What dictates that a node is the first element in the list? Might need to reset that.

    addToBack: Write a method of the SLList class that accepts a value, and adds a node with that
    value to the BACK of the list.

    Steps:
        1. Create a new node
        2. Start at the head of the list
        3. Run to the last node
        4. Set the last node's next attribute to the new node
    EDGE CASE: What if the list is empty? How do we even know if the list is empty?


    BONUS IF YOU ARE DONE QUICKLY:
    contains: Write a method of the SLList class that accepts a value, and returns a boolean based
    on whether or not a node with that value exists in the list

    Steps:
        1. Start at the head of the list
        2. Check if the value of the node we're looking at equals the value passed in
        3. If it does, return true
        4. If not, go to the next node.
        5. If we checked every single node and we're still running the method, the value does not exist in the list.
*/

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Why??
    }
}

class SLList {
    constructor(){
        this.head = null;
    }
    addToFront(value) {
        var temp = this.head;
        var newNode = new SLNode(value);
        this.head = newNode;
        newNode.next = temp;
        return this;
    }
    addToBack(value) {
        var pointer = this.head;
        if (pointer === null) {
            return this.addToFront(value);
        }
        while (pointer.next != null) {
            pointer = pointer.next;
        }
        pointer.next = new SLNode(value);
        return this;
    }
    removeFromFront()
    contains(value) {
        var pointer = this.head;
        while(pointer != null){
            if (pointer.value == value) {
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }
    printList(){
        var pointer = this.head;
        while(pointer != null){
            console.log(pointer.value);
            pointer = pointer.next;
        }
    }
}
var newList = new SLList;
var newNode = new SLNode(1);
// Duy, Vinny, Jeremy, Trevor, Andre, Patrick

console.log(newList);
newList.addToFront(3);
console.log(newNode);
console.log(newList);
// console.log(newList);