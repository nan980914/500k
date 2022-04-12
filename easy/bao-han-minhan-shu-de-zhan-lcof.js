// 【包含min函数的栈】
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
// 题目链接：https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/

/** 
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.min();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.min();   --> 返回 -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min_stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.min_stack.length === 0 || x < this.min()) {
    this.min_stack.push(x);
  } else {
    this.min_stack.push(this.min());
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let length = this.stack.length;
  return length > 0 && this.stack[length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  let length = this.min_stack.length;
  return length > 0 && this.min_stack[length - 1];
};
