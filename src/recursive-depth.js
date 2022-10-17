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
    let count = 1;
    let result = 1;
    for (let key in arr) {
      console.log('in: ', arr[key], typeof arr[key]);
      if (Array.isArray(arr[key])) {
        count += calculateDepth(arr[key]);
      }
      console.log('tt');
      if (count > result) result = count;
    }
    return result;
  }
}

module.exports = {
  DepthCalculator,
};
