const {NotImplementedError} = require( '../extensions/index.js' );

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

    let s = 0
    let j = 0
    while (j < matrix[0].length) {
        let i = 0
        while (i < matrix.length) {
            (matrix[i][j]) ? s += matrix[i][j] : i = matrix.length
            i++
        }
        j++
    }
    return s
}

// getMatrixElementsSum( [
//     [ 0, 1, 1, 2 ],
//     [ 0, 5, 0, 0 ],
//     [ 2, 0, 3, 3 ]
// ] )

module.exports = {
    getMatrixElementsSum
};
