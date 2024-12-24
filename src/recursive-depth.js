const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let deep;
    let maxDeep = 1;
    let i = 0;
    while (i < arr.length) {
      deep = 1;      
      if (Array.isArray(arr[i])) {
        deep +=  this.calculateDepth(arr[i])
      }
      i += 1;
      if (deep > maxDeep) {
        maxDeep = deep;
      }
    }
    return maxDeep;
  }

}

module.exports = {
  DepthCalculator
};
