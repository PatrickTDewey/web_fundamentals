class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);

    }

    printList() {
        let pointer = this;
        console.log(pointer);
        while (pointer !== null) {
            console.log(pointer.val);
            pointer = pointer.next;
        }
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let newList = new ListNode(null)
    if (l1 === null || l2 === null) {
        if (l1 === null && l2 === null) {
            console.log("l1 return");
            return l1;
        }
        else if (l1 === null) {
            console.log("l2 return");
            return l2;
        }
        else {
            console.log("else return");
            return l1;
        }
    }

    let listOnePointer = l1;
    let listTwoPointer = l2;
    let newListPointer = newList
    while (listOnePointer !== null || listTwoPointer !== null) {
        debugger;
        if (listTwoPointer === null) {
            newListPointer.next = listOnePointer;
            newListPointer = newListPointer.next;
            listOnePointer = listOnePointer.next;
        } else if (listOnePointer === null) {
            newListPointer.next = listTwoPointer;
            newListPointer = newListPointer.next;
            listTwoPointer = listTwoPointer.next;
        }
        else {
            if (listOnePointer.val < listTwoPointer.val) {
                if (newListPointer.val === null) {
                    newList = listOnePointer;
                    newListPointer = newList;
                    listOnePointer = listOnePointer.next;
                } else {
                    newListPointer.next = listOnePointer;
                    newListPointer = newListPointer.next;
                    listOnePointer = listOnePointer.next;
                }
            } else {
                if (newListPointer.val === null) {
                    newList = listTwoPointer;
                    newListPointer = newList;
                    listTwoPointer = listTwoPointer.next;
                } else {
                    newListPointer.next = listTwoPointer;
                    newListPointer = newListPointer.next;
                    listTwoPointer = listTwoPointer.next;
                }
            }
        }
        

    }
    return newList;

};

let l1 = new ListNode(-9);
l1.next = new ListNode(3)
// l1.next.next = new ListNode(4);
// let l2 = new ListNode(1).next(3).next(4);
l1.printList();
let l2 = new ListNode(5, new ListNode(7));
let l3 = new ListNode(null);
l2.printList();
l3.printList();
console.log(mergeTwoLists(l1, l2).printList());


//begin Spencers solution
var toArr = function(l1){
    let arr = []
    while (l1 !== null){
        arr.push(l1.val)
        l1 = l1.next
    }
    return arr;
}
var mergeTwoLists = function(l1, l2) {
    let arr1 = toArr(l1)
    let arr2 = toArr(l2)
    for (let i = 0; i < arr1.length ; i++){
        arr2.push(arr1[i]);
    }
    arr2.sort((a,b)=>(a-b))
    if (arr2[0] === undefined){
        return l2
    }
    let newNode = new ListNode(arr2[0], null)
    let nextNode = newNode
    for (let i = 1; i < arr2.length; i++){
        while(nextNode.next !== null){
            nextNode = nextNode.next;
        }
        const newNode2 = new ListNode(arr2[i],null)
        nextNode.next = newNode2;
    }
    return newNode
    
};

// begin Random guy on internet's solution
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2;
    } else {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1;
    }
};