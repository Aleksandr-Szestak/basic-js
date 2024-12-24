const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let i;
  let j;
  let arrS2 = s2.split('');
  let result = 0;
  for (i = 0; i < s1.length; i += 1) {
    for (j = 0; j < arrS2.length; j += 1) {
      if (arrS2[j] !== null && s1[i] === arrS2[j]) {
        result += 1;
        arrS2[j] = null;
        break;
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
