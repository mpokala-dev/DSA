/**
 * where n is the length of the array,
 * i is the number of iterations and j is the number of comparisons in each iteration.
 * The outer loop runs n-1 times cause (considering we sort the array in ascending order)
 * the largest element gets placed at the end of the arrayafter each iteration.
 * The inner loop runs n-i-1 times, where i is the current iteration of the outer loop.
 * This means that in the first iteration, the inner loop will run n-1 times,
 * in the second iteration it will run n-2 times, and so on,
 * until the last iteration where it will run only once. // j runs similar times w.r.t. i like i
 * compare notes if not clear🙂
 */

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}
bubbleSort([64, 34, 25, 12, 22, 11, 90]); // [11, 12, 22, 25, 34, 64, 90]
