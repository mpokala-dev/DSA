/** Lett code number 485 */
function maxConsecutiveOnes(arr) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i--) {
    if (arr[i] !== 0) {
      count++;
      maxCount = Math.max(maxCount, count); // maxCount = maxCount > count ? maxCount : count;
    } else {
      count = 0;
    }
  }
  return maxCount;
}
