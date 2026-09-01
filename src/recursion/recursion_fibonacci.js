/** Return the nth Fibonacci number using recursion */
/** Leet Code 509 - recursion time complexity is exponential so we will optimize it with dynamic programming later */
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(5); // 5
