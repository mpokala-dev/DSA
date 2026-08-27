/**Leet Code 26 */
function removeDuplicates(arr) {
  /**
   * write a function to identify unique integers of the given sorted non-decreasing array
   * and position the unique elements in place. And return the number of unique elements in
   * given array.
   *
   *
   * arr is a sorted array of integers(integers means the numbers can be positive or negative)
   * non-decreasing => the array can have duplicate integers in increasing order([2,8,8,9,12,12,12,12])
   * unique numbers should be arranged in place => the initial array should be rearranged but
   * not create a new array out of it.
   * i.e., [2,8,9,12,12,12,12,12] => the unique integers are placed in correct order in the original array
   * and the remaining elements are non of concern, which means can be left as is without any change.
   */

  let x = 0; // lets maintain x to denote position of unique element and i to iterate all the elents of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return (x = 1); // to return number of unique elements
}
