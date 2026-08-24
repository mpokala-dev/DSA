function palindrom(n) {
  const numCopy = n;
  let rev = 0;
  if (n < 0) {
    console.log("negative numbers cannot be palindrom numbers");
    return;
  }
  if (n === 0) {
    // ask the interviwer for this edge case what should be the output
    console.log("Sigle digit numbers are palindroms by nature");
    return;
  }
  while (n > 0) {
    /** multiply with 10 so it increases its units position and the number gets added as expected
     * i.e.,if n=121 instead of 1+2 it becomes 1*10 +2 => 12 and not 3 in the first loop iteration
     */
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  rev === numCopy ? console.log("Palindrom") : console.log("Not Palindrom");
}

palindrom(1221);
