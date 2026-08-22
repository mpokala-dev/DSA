# DSA

## Loop in loop

- n x n \* matrix
<pre>
    n  x   n
=>rows x columns
=> i   x   j
</pre>

---

if n=4 then nxnMatrix(4) should be

<pre>
*   *   *   *
*   *   *   *
*   *   *   *
*   *   *   *
</pre>

---

- ### right angle triangle (left aligned)
<pre>
    if n = 4 ; 
    => for i = 0 to n, j should add a row of 0 till i+1 for each iteration while the conditions for i loop and j loop are i is < n and j is < i+1 respectively.
    => 4 rows and 4 columns but each column should print only i+1 star for each iteration.
</pre>

<pre>leftAlignStarTriangle
*
*   *
*   *   *
*   *   *   *
</pre>

    ### leftAlignTriangle ###
    for triangle of 1 to n and if n=4
    1
    1 2
    1 2 3
    1 2 3 4

    ### leftAlignRowNumTriangle ###
    for triangle to print as number of row where n=4
    1
    2 2
    3 3 3
    4 4 4 4

    for (let i= 0 ; i<n ; i++){
        let row = "";
        for (let j= 0; j<= i; j++){ // j<i+1
            row = row+(i+1);
        }
        console.log(row);
    }

    ### leftAlign_Inversion_ColNumTriangle ###
        1 2 3 4 5
        1 2 3 4
        1 2 3
        1 2
        1

<pre>rightAlignStarTriangle where n = 4
            *
        *   *
    *   *   *
*   *   *   *
</pre>
<pre>
    if n=4,
pos of  i   |num of stars=>(i+1)|pos of * wrt j => no.of blanks = n-(i-1)
        0   |       1           |      ---3
        1   |       2           |      --23
        2   |       3           |      -123
        3   |       4           |      0123
</pre>
<pre>
<code>
for(let i=0; i<n ; i++){
    let row = " ";
    for(let j=0; j<n-(i-1) ;j++){ // to add spaces/blanks
        row = row + " ";
    }
    for(let k=0; k<i+1; k++){ // to add *s and k<i+1 and not k<=i+1 cz when i = 0, k should print only one *
        row = row + " *";
    }
    console.log(row);
}

</code></pre>
