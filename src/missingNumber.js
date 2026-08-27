var missingNum = function (arr) {
  let sum = 0;
  let n = arr.length;
  const total = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
  }
  return total - sum;
};
missingNum([0, 1]);
//2
