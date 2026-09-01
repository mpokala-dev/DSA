function sumOfNNumbers(n) {
  if (n < 0) return 0;
  return n + sumOfNNumbers(n - 1);
}
sumOfNNumbers(5); // 15
