/**return sum of elements in an array using recursionwithout modifying given array */
const arr = [1, 2, 3, 4, 5];
function sumOfArrayElements(n) {
  if (n < 0) return 0;
  return arr[n] + sumOfArrayElements(n - 1);
}
sumOfArrayElements(arr.length - 1); // 15
