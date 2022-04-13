// [反转链表]
// 题目链接：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

/*
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let preNode = null,
    curNode = head;
  while (curNode !== null) {
    const nextNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = nextNode;
  }
  return preNode;
};
