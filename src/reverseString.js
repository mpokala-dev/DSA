/**Leet Code 344 */
function reverseString(s) {
  let x = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (x <= i) {
      return s;
    } else {
      const iCopy = s[i];
      s[i] = s[x];
      s[x] = iCopy;
      x--;
    }
  }
  console.log(s);
}

reverseString(["h", "e", "l", "l", "o"]);
// ["o","l","l","e","h"]
