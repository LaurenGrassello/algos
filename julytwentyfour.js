//reversing linked list

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    let prevNode = null;
    let currentNode = head;

    while (currentNode !== null) {
        let nextTemp = currentNode.next; // Temporarily store the next node
        currentNode.next = prevNode; // Reverse the link
        prevNode = currentNode; // Move forward in the list
        currentNode = nextTemp;
    }

    return prevNode;
}
