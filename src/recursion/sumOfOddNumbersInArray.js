/** Return sum of odd numbers in an array using recursion */
const arr = [1, 2, 3, 4, 5];
function sumOfOddNumbersInArray(n) {
  if (n < 0) return 0;
  //   if (arr[n] % 2 !== 0) {
  //     return arr[n] + sumOfOddNumbersInArray(n - 1);
  //   }
  //   return sumOfOddNumbersInArray(n - 1);
  // OR
  return (arr[n] % 2 !== 0 ? arr[n] : 0) + sumOfOddNumbersInArray(n - 1);
}
sumOfOddNumbersInArray(arr.length - 1); // 9
