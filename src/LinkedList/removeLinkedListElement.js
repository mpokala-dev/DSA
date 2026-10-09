/** LeetCode 203 */
var removeElements = function (head, val) {
  // Create a dummy node to handle the case where the head node needs to be removed
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};
