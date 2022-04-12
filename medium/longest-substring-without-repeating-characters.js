// 【无重复字符的最长子串】
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 题目链接： https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/** 
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let minIndex = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], minIndex) < i) minIndex = s.indexOf(s[i], minIndex) + 1;
    else ans = Math.max(ans, i - minIndex + 1);
  }
  return ans;
};
