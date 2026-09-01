/** Print n to 1 numbers using recursion */
function printNTo1Numbers(n) {
  if (n <= 0) return;
  console.log(n);
  printNTo1Numbers(n - 1); //n--
}
printNTo1Numbers(10); // 10 9 8 7 6 5 4 3 2 1
