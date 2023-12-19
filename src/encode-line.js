const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result='';
  let i=0, j, s, currSymb;
  
  while (i < str.length) {
    currSymb = str[i];
    console.log(currSymb);
  
    j=i+1;
    s=1;
    while (j < str.length && str[j] === currSymb){
      s++;
      j++;
    }
  
    if (s>1) {
      result += String(s)+currSymb;
    } else {
      result += currSymb;
    }
  
    i=j;
  }
  
  return result;
}

module.exports = {
  encodeLine
};
