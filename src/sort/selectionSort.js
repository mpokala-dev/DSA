/**
 * where n is the length of the array,
 * in selection sort we arrange the array elements by selecting the minimum element from the unsorted part
 * of the array and placing it at the beginning of the sorted part of the array.
 * We identify the beginning of the sorted array by the position of the outer loop variable i,
 * which starts at 0 and goes up to n-1.
 *
 * i.e., i < n-1 not i<=n-1 because the least element will be sorted by swapping with i indexat the end of the iteration.
 *
 * We identify the minimum element in the unsorted part of the array by using the inner loop variable j,
 * which starts at i+1 and goes up to n-1.
 * i.e., j=i+1; j<n; j++
 * The j loop compares each element in the unsorted part of the array with the current minimum element,
 * and if it finds a smaller element, it updates the index of the minimum element.
 * once the all elements are compared to identify the minimum,
 * we swap the minimum element with the first element of the unsorted part of the array,
 * which is the element at index i.
 * This process continues until the entire array is sorted.
 */

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
selectionSort([64, 25, 12, 22, 11]); // [11, 12, 22, 25, 64]
