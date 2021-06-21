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
var addTwoNumbers = function(l1, l2) {
    //create an empty linkedlist result
    let result = new ListNode();
    
    //create a function that checks each of the val in each node of the linked list
    var checkNode = (node1, node2, sumNode) => {
        //create an end condition
        //debugger;
        if(node1.next === null && node2.next === null) {
            sumNode.val = sumNode.val + node1.val + node2.val;
            if(sumNode.val >= 10) {
                sumNode.next = new ListNode(Math.floor(sumNode.val/10))
                sumNode.val = sumNode.val % 10;
                return sumNode;
            } else {
                return sumNode;
            }
        }
        //check if node1.val or node2.val is null
        let first;
        let second;
        if(node1.val === 0) {
            first = 0;
        } else {
            first = node1.val;
        }
        //console.log(node2.val);
        if(node2.val === 0) {
            second = 0;
        } else {
            second = node2.val;
        }
        //we add the val in l1 and l2,
        let sum = sumNode.val + first + second;
        
        //if the sum is less than 10, we just add normally, else we include that value and overwrite it.
        if(sum < 10) {
            sumNode.val = sum;
            sumNode.next = new ListNode(0);
            if(node1.next === null) {
                node1.next = new ListNode()
                checkNode(node1.next, node2.next, sumNode.next)
            }
            else if(node2.next === null) {
                node2.next = new ListNode()
                checkNode(node1.next, node2.next, sumNode.next)
            }
            else {
                checkNode(node1.next, node2.next, sumNode.next)
            }
        } else {
            sumNode.val = sum % 10;
            sumNode.next = new ListNode(Math.floor(sum / 10));
            if(node1.next === null) {
                node1.next = new ListNode()
                checkNode(node1.next, node2.next, sumNode.next)
            }
            else if(node2.next === null) {
                node2.next = new ListNode()
                checkNode(node1.next, node2.next, sumNode.next)
            }
            else {
                checkNode(node1.next, node2.next, sumNode.next)
            }
        }
        //if the value is 2 digits, we add the tens place value and push it to the storage unit
        return;
    }
    checkNode(l1, l2, result);
    return result;
};