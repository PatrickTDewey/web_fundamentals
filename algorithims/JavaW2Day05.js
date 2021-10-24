/**
 * A class that represents a priority element (or Node)
 * Each node contains the data that is stored, the given priority (highest is 1),
 * and the .next for the SLL implentation
 */
class PriorityNode {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

/**
 * Class to represent a PriorityQueue with methods that enforce the correct
 * order of queue items.
 */
class SLPriorityQueue {
    /**
     * Method that instantiates the SLQueue object
     * this.head points to the front of the queue
     * this.tail points to the back of the queue
     * this.size tracks the size. we need to make sure we increment or decrement
     * this.size when we enqueue or dequeue
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Takes a node and adds it to the top of the queue
     * We need to preserve the priority of nodes, so we insert once we find the
     * appropriate spot
     * @param {Node} newNode the new node that is to be pushed to the top of the queue
     */
     enqueue(newNode) { 
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
            this.size++;
  
            return this;
        }
  
        let runner = this.head;
        while(runner.next != null && runner.next.priority <= newNode.priority ) {
            runner = runner.next;
        }
  
        if(runner.next == null) {
            this.tail = newNode;
        }
  
        newNode.next = runner.next;
        runner.next = newNode;
        this.size++;
  
        return this;
    }
    // enqueue(newNode) {
    //     if(this.size == 0){
    //         this.head = newNode
    //         this.tail = newNode
    //         this.size ++
    //         return this
    //     } if(this.size == 1){
    //         if(this.head.data > newNode.data){
    //             let temp = this.head
    //             this.head = newNode
    //             newNode.next = temp
    //             this.tail = temp
    //         } else{
    //             this.head.next = newNode
    //             this.tail = newNode;
    //         }
    //         this.size++
    //         return this
    //     }
    //     let walker = this.head
    //     let runner = this.head.next
    //     while(runner != null){
    //         console.log("hi")
    //         if(newNode.data > walker.data && newNode.data < runner.data){
    //             let temp = runner
    //             walker.next = newNode
    //             newNode.next = temp
    //             this.size++
    //             return this
    //         }
    //         walker = runner
    //         runner = runner.next
    //     }
    //     console.log("hello")
    //     walker.next = newNode
    //     this.size++
    //     return this
    // }

    /**
     * Removes the Node at the front of the queue and returns it
     * this node would have the highest priority
     * @returns {Node} the node that was removed
     */
    dequeue() { }
}
let myqueue = new SLPriorityQueue()
myqueue.enqueue(new PriorityNode(1))
myqueue.enqueue(new PriorityNode(0))
myqueue.enqueue(new PriorityNode(2))
myqueue.enqueue(new PriorityNode(1))
console.log(myqueue)