/*
    Key focus of the day? Removing a node from the middle of a SLL.
    Let's think about this. If we have:
    H: 5 -> 4 -> 3 -> 2 -> 1 ->

    And we want to remove the node with a value of 3, how might we do this?
    The end result should look something like:
    H: 5 -> 4 -> 2 -> 1 ->

    Well in that case, all we really need to do is move 4's .next to be 3's .next, right?
    Right.

    With that in mind...

    Two challenges today!

    Challenge 1: moveMinToFront()
    Write a method that will find the node with the smallest value, and move it to the front. 
    EXAMPLE:
    H: 5 -> 3 -> 6 -> 1 -> 2 ->
    would become
    H: 1 -> 5 -> 3 -> 6 -> 2 -> 

    Challenge 2: moveMaxToBack()
    Write a method that will find the node with the largest value, and move it to the back.
    EXAMPLE:
    H: 1 -> 7 -> 11 -> 18 -> 2 -> 4 ->
    would become
    H: 1 -> 7 -> 11 -> 2 -> 4 -> 18 ->

    BONUS: 
    Don't use the addToFront/addToBack functions or their logic
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
    }

    addToFront(value){
        let currHead = this.head;
        let node = new Node(value);
        this.head = node;
        node.next = currHead;
        return this;
    }
    
    addToBack(value) {
        let pointer = this.head;
        let node = new Node(value);
        if(this.head === null) {
            return this.addToFront(value);
        }
        while (pointer.next != null) {
            pointer = pointer.next
        }
        pointer.next = node;
        return this;
    }

    printInfo(){
        let pointer = this.head;
        let print = '';
        while (pointer) {
            print += pointer.value + ' -> ';
            pointer = pointer.next;
            
        }
        console.log(print);
    }
    contains(value){
        let pointer = this.head;
        while(pointer != null){
            if (pointer.value === value) {
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }

    removeFront(){
        if (this.head === null) {
            return 'List is empty';
        }
        let front = this.head;
        this.head = front.next;
        front.next = null;
        return front;
    }
    removeBack(){
        let pointer = this.head;
        while (pointer != null) {
            console.log(pointer.value);
            pointer = pointer.next;
            if (pointer.next.next === null) {
                let value = pointer.next;
                pointer.next = null;
                return value;
            }
        }
    }

    moveMinToFront(){
        let pointer = this.head; // init the runner
        let behindMin;
        let min = this.head; // initialize min to be equal to first Node
        while (pointer.next != null) {
            console.log(pointer.next.value);
            if (pointer.next.value < min.value) { 
                behindMin = pointer;
                min = pointer.next;
                behindMin.next = min.next;
            }
            pointer = pointer.next;
        }
        min.next = this.head;
        this.head = min;
        return min;
    }
}

const myList = new List();
myList.addToFront(1).addToFront(6).addToFront(5);
myList.addToBack(7).addToBack(8).addToBack(14);
// console.log(myList.contains("spaghetti"));
// console.log(myList.contains(4));
// console.log(myList);
// console.log(myList.removeFront());
// console.log(myList.removeBack());
console.log(myList.moveMinToFront());
console.log(myList);
myList.printInfo();