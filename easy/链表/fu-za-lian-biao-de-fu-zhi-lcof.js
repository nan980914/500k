// 复杂链表的复制
// https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/

// 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return head;
  let node = head;
  let map = new Map();

  // 复制节点，将新节点放入map中
  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }

  node = head;

  while (node) {
    map.get(node).next =
      map.get(node.next) === undefined ? null : map.get(node.next);
    map.get(node).random = map.get(node.random);
    node = node.next;
  }
  return map.get(head);
};
