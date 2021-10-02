class SLNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
    };

    addNodeToFront(value) {
        var front = this.head;
        var node = new SLNode(value);
        this.head = node;
        node.next = front;
        return this;
    };

    addNodeToBack(value){
        var runner = this.head;
        if (runner === null) {
            this.head = value;
            return this
        }
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = new SLNode(value);
    };

    listContainsValue(value) {
        var runner = this.head;
        while (runner != null) {
            if (runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
        
    };

};

const myList = new SLList();
console.log(myList);
// myList.addNodeToFront(3);
console.log(myList);
myList.addNodeToBack(8);
console.log(myList);
console.log(myList.listContainsValue(`98`))