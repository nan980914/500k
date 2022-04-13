//【判定是否互为字符重排】
// 题目链接：https://leetcode-cn.com/problems/check-permutation-lcci/
// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  let arr1 = s1.split("").sort();
  let arr2 = s2.split("").sort();
  return arr1.toString() === arr2.toString();
};
