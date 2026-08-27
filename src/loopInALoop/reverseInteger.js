/**Leet Code 7 */
var reverse = function (x) {
  const xCopy = x;
  let rev = 0;
  x = Math.abs(x);
  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  rev = xCopy < 0 ? -rev : rev;
  const limit = Math.pow(2, 31); // Math.pow(2,31) is same as 2**31
  return rev < -limit || rev > limit ? 0 : rev;
};
reverse(-123); //-321
reverse(120); //21
reverse(789); //987
reverse(9); //9
// if the reverse number does not fall in the limit range, it returns 0
// i.e., if not -(2^31) <= x <= (2^31) - 1
