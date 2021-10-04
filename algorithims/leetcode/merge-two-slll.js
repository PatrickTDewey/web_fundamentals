/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const util = require('util')
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    debugger
    let array = [];
    let sortedList = []
    while (l1.next != null) {
        array.push(l1.val);
        l1 = l1.next;
    }
    array.push(l1.val);
    while (l2.next != null) {
        array.push(l2.val);
        l2 = l2.next;
    }
    array.push(l2.val);


    while (array.length > 0) {
        let min = array[0];
        for (let index = 0; index < array.length; index++) {
            if (array[index] < min) {
                min = array[index];
            }
        }
        // new array spliced of 1 min value
        let spliced = array.splice(array.indexOf(min), 1);
        // push the one min to sortedList
        sortedList.push(spliced.pop());
    }
    
    return sortedList;

};
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// console.log(mergeTwoLists(l1, l2));
// var mergeTwoLists = function (l1, l2) {
//     let node = new ListNode();
//     console.log(l1);
//     while (l1 != null) {
//         node.val = l1.val
//         node.next = l1.next
//         node = node.next;
//         l1 = l1.next;
//     }
//     console.log(node);
    // array.push(l1.val);
    // while (l2.next != null) {
    //     array.push(l2.val);
    //     l2 = l2.next;
    // }
    // while (array.length > 0) {
    //     let min = array[0];
    //     for (let index = 0; index < array.length; index++) {
    //         if (array[index] < min) {
    //             min = array[index];
    //         }
    //     }
    //     let spliced = array.splice(array.indexOf(min), 1);
    //     sortedList.push(spliced.pop());
    // }
    // return sortedList;

// };
console.log(mergeTwoLists(l1,l2))