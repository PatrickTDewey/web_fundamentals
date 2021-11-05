/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head){
    let pointer = head;
    while(pointer != null){
        if (pointer.child != null) {
            let childPointer = pointer.child;
            while(childPointer.next != null){
                if(childPointer.child != null){
                    flatten(childPointer);
                }
                childPointer = childPointer.next;
            }
            
           if(pointer.next != null){
               pointer.next.prev = childPointer
               
           }
           childPointer.next = pointer.next;
           pointer.child.prev = pointer;
           pointer.next = pointer.child;
           pointer.child = null;
        }
        
        pointer = pointer.next;
    }
    return head;
}