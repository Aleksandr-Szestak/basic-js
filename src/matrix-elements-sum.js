const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let i, j;
  let result = 0;
  let sumEnable = Array.from(matrix[0], (x) => 1);
  for (i=0; i<matrix.length; i++){
    for (j=0; j<sumEnable.length; j++){
      if (sumEnable[j] !== 0){
        result += matrix[i][j];
      }
    }
    sumEnable = Array.from(matrix[i]);
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
