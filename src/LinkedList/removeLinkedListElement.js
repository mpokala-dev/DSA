/** LeetCode 203 */
var removeElements = function (head, val) {
  // Create a dummy node to handle the case where the head node needs to be removed
  // here the dummy acts as a sentinel and is useful to avoid edge cases when the head node itself needs to be removed
  // the dummy node acts as a source point to the head of the list, allowing us to easily manipulate the list without worrying about losing the reference to the head node.
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
