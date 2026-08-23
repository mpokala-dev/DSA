/**
 * For Patterns please refer README.md file
 */
function leftAlignStarTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      //for (let j = 0; j <= i ; j++)// same as above condition
      row = row + "* ";
    }
    console.log(row);
  }
}
leftAlignStarTriangle(4);

function leftAlignNumTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}
leftAlignNumTriangle(4);

function leftAlignRowNumTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
      row = row + " " + (i + 1); // row = row + " " + (j + 1); -- > for Column number
    }
    console.log(row);
  }
}
leftAlignRowNumTriangle(4);

function leftAlign_Inversion_ColNumTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= n - 1 - i; j++) {
      // j<n-i
      row = row + " " + (j + 1); // for "*" replace (j+1) with "*"
    }
    console.log(row);
  }
}
leftAlign_Inversion_ColNumTriangle(4);

function rightAlignTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      // to add spaces/blanks
      row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
      // to add *s and k<i+1 and not k<=i+1 cz when i = 0, k should print only one *
      row = row + "*";
    }
    console.log(row);
  }
}

rightAlignTriangle(4);

function binaryTriangle_startWith_1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else toggle = 1;
    }
    console.log(row);
  }
}
binaryTriangle_startWith_1(4);

function binaryTriangle_startWith_binaryContinuation(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else toggle = 1;
    }
    console.log(row);
  }
}
binaryTriangle_startWith_binaryContinuation(4);
