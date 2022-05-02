const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = -1;
  let nn = n.toString();
  for (i = 0; i < nn.length; i++) {
    res=Math.max(res,Number(nn.slice(0, i) + nn.slice(i + 1)));
  }
  return res;
}

module.exports = {
  deleteDigit
};
