/**Leet Code 136 */
/** Note that the array of numbers is not sorted and non empty starting num 1 */
/** this can be done in 2 approaches
 *
 * 0. create a js object with the element and its occuences
 * => loop through the array of numbers and maintain all entries and no. of ocuurrences
 * => then loop through the array of numbers again to find if the js object created has an element
 *  of numbers array with 1 occurence and return the element.
 *
 * 1. use js XOR
 * js XOR operation is represented as ^
 * => a ^ 0 === a
 * => a ^ a === 0
 * therefore any element occurring twice will be eliminated and only
 * the element that occurred once is returned.
 */

// approach 0
function singleNumOccurence(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else hash[arr[i]]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] === 1) return arr[i];
  }
}
singleNumOccurence([2, 2, 1, 3, 4, 3, 1]); // 4

// approach 1
var singleNumber = function (nums) {
  let xor = 0; // to start XOR operation with 0
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
singleNumber([2, 2, 1]); // 1
