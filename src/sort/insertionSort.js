/**
 * Insertion sort is a sorthing algorithm where we consider the first element of the array as sorted
 * and the rest of the elements as unsorted.
 * We then take the first element of the unsorted part and compare it with the elements of the sorted part.
 * We consider the first element of the unsorted part to be current element and the last element of
 * the sorted part to be previous element.
 * i.e., we start i with index 1 and assign previous element with position i-1 and current element with position i.
 * ==>for array arr of length n, for(let i=1; i<n; i++) p = i-1 ; current = arr[i] ;
 * we then compare current element and previous element and if current element is smaller than previous element,
 * we move the previous elemnt one position forward and decrement the previou index by 1.
 * ==> arr[p+1] = arr[p]; p--;
 * we repeat this until current element is greater than previous element or we reach the beginning of the array.
 * ==> while(p>=0 && current < arr[p])
 * once we find the correct position for the current element, we insert it at that position.
 * ==> arr[p+1] = current;
 *
 * refer notes for better understanding.🙂
 */

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let p = i - 1;
    let curr = arr[i];
    while (p >= 0 && arr[p] > curr) {
      arr[p + 1] = arr[p];
      p--;
    }
    arr[p + 1] = curr;
  }
  return arr;
}
insertionSort([12, 11, 13, 5, 6]); // [5, 6, 11, 12, 13]
