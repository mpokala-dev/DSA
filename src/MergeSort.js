/**
 * Merge Sorted Array
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but
 * instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged, and the last n elements
 * are set to 0 and should be ignored. nums2 has a length of n.
 *
 * Example 1:
 *
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * Example 2:
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 * Example 3:
 *
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure
 * the merge result can fit in nums1.
 */

// Execution thoughts
/**consider p1 as a pointer pointing at the last element of elements of nums1 => p1 = m-1
 * consider p2 as a pointer pointing at the last element of elements of nums2 => p2 = n-1
 * lets iterate through nums1 as nums1/final array should be stored inside the array nums1
 *
 * solution:
 *
 * lets iterate through the num1 array from backwards so that the greater element of num1 or nums2
 * will be placed at the last position of nums1 in no-decresing sorted order
 *
 * we compare p1 and p2 to position in nums1
 * we should continues comparing p1 and p2 only until one of p1 or p2 is exhausted.
 * if p1 exhausts first => p1<0 ; we should keep appending p2 to nums1 => since p1 is part of nums1,
 *  we have to condition the p1>p2 such that the iteration/loop of nums1 does not break.
 *  => p1 > p2 && p1>=0
 * if p2 exhausts first => p2<0 ; we should keep appending p1 to nums1
 *  => we should break the loop iteration on nums1 as we already have nums1 as sorted array and
 *  nums1 is already filled with nums2 in sorted order, no need for iterating though nums1
 *  => p2<0 break;
 */
var mergeSort = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
};
mergeSort([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
