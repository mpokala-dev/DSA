/** Return the factorial of a number using recursion where n is non-negative integer */
function factorial(n) {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}
factorial(5); // 120
