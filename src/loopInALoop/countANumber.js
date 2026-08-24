function numOfDigits(n) {
  let count = 0;
  n = Math.abs(n); // to convert -ve numbers to +ve so while loop condition runs
  n === 0 ? (count = 1) : (count = 0); // if the given number is itself 0 => n is 0
  while (n > 0) {
    n = Math.floor(n / 10); // to round off the number to lower integer
    count++;
  }
  console.log(count);
}
numOfDigits(9);
