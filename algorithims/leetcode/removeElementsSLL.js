/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = (head, val) => {
    if (head == null) {
        return head;
    }
    let pointer = head;
    while(pointer != null && pointer.val === val) {
        pointer = pointer.next;
        head = pointer;
    }
    while (pointer != null){
        let currentNode = pointer;
        
        
        while(pointer.next !== null && pointer.next.val === val){
            pointer = pointer.next;
        }
        currentNode.next = pointer.next;
        pointer = pointer.next
 
    }
    return head;
 }