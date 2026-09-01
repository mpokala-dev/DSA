/** Print 1 to n numbers using recursion */

/**
 * using x++ in line 13 function call or x = x++ above line 13 will not work as it will pass the same value of x
 * to the next function call and then increment it after the function call is completed.
 * So, we need to use x+1 in line 12 to pass the incremented value to the next function call.
 * Or use x++; above line 13 and use x in the function call in line 13.
 */
const n = 10;
function print1TonNumbers(x) {
  if (x > n) return;
  console.log(x);
  print1TonNumbers(x + 1); //++x will work as well but x++ will not work
}
print1TonNumbers(1); // 1 2 3 4 5 6 7 8 9 10
