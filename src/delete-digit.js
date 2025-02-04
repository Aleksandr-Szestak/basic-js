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
  let result = 0;
  let num; 
  const nStr = String(n);
  for (let i = 0; i < nStr.length; i += 1) {
     num = Number(nStr.slice(0, i) + nStr.slice(i + 1))
     if (num > result) {
       result = num;
     }
  }
  return result;
}

module.exports = {
  deleteDigit
};
