/**Leet Code 283 */
var moveZeros = function (nums) {
  let x = 0; //position of non-zero element to be placed in the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let j = x; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};
moveZeros([0, 1, 0, 3, 12]);
// [1,3,12,0,0]
moveZeros([0, 0]);
//[0,0]
