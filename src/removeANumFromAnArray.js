/**Leet Code 27 */
function removeElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
//final arr would be [0,1,3,0,4,0,4,2] after re-arranging all the non-val elements
