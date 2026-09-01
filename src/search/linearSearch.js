/** Return the index of the target element in an array using linear search */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}
linearSearch([6, 7, 1, 2, 3, 4, 5], 3); // 4
