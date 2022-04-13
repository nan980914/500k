// 【判定字符是否唯一】
// 题目链接： https://leetcode-cn.com/problems/is-unique-lcci/
// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
var isUnique = function (str) {
  const set = new Set(str);
  return set.size === str.length;
};
