/**Leet Code 912 */
/**
 * Merge Sort is a divide-and-conquer algorithm that divides the input array into
 * two halves, recursively sorts them, and then merges the sorted halves back together.
 * ex: [38, 27, 43, 3, 9, 82, 10]
 * The merge sort algorithm can be broken down into the following steps:
 * 1. Divide: Split the input array into two halves until each subarray contains only one element.
 *  [38, 27, 43, 3, 9, 82, 10] => [38, 27, 43] and [3, 9, 82, 10]
 * 2. Conquer: Recursively sort each half of the array.
 *  [38, 27, 43] => [38] and [27, 43] => [38] and [27] and [43]
 *  [3, 9, 82, 10] => [3, 9] and [82, 10] => [3] and [9] and [82] and [10]
 * 3. Merge: Merge the two sorted halves back together to form a single sorted array.
 * [38] and [27] and [43] => [38] and [27, 43] => [27, 38, 43]
 * [3] and [9] and [82] and [10] => [3, 9] and [10, 82] => [3, 9, 10, 82]
 * Finally, we merge the two sorted halves [27, 38, 43] and [3, 9, 10, 82]
 * to get the final sorted array [3, 9, 10, 27, 38, 43, 82].
 */

function mergeSortedArrays(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;
  const result = []; // using new array to return merged array
  let p1 = 0;
  let p2 = 0;
  // need not use for-loop when using while-loop
  while (p1 < m && p2 < n) {
    if (p2 < n && arr2[p2] < arr1[p1]) {
      result.push(arr2[p2]);
      p2++;
    } else {
      result.push(arr1[p1]);
      p1++;
    }
  }
  while (p1 < m) {
    result.push(arr1[p1]);
    p1++;
  }
  while (p2 < n) {
    result.push(arr2[p2]);
    p2++;
  }
  return result;
}
function mergeSort(arr) {
  if (arr.length == 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, mid));
  const arr2 = mergeSort(arr.slice(mid));
  return mergeSortedArrays(arr1, arr2);
}

mergeSort([38, 27, 43, 3, 9, 82, 10]); // [3, 9, 10, 27, 38, 43, 82]

// OR
function mergeSortedArrays(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    // using same array to return merged array
    if (p2 < 0) break;
    if (arr1[p1] >= arr2[p2] && p1 >= 0) {
      arr1[i] = arr1[p1];
      p1--;
    } else {
      arr1[i] = arr2[p2];
      p2--;
    }
  }
  return arr1;
}
mergeSortedArrays([1, 2, 3], [2, 5, 6]); // [1, 2, 2, 3, 5, 6]

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, mid));
  const arr2 = mergeSort(arr.slice(mid));
  return mergeSortedArrays(arr1, arr2);
}
mergeSort([7, 2, 1, 6, 8, 5, 3, 4]); // [1, 2, 3, 4, 5, 6, 7, 8]
