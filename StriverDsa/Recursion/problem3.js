//print linearly 1-N natural numbers using recursion but by backtracking
function printNaturalNumbers(i, n) {
  if (i < 1) return;
  printNaturalNumbers(i - 1, n);
  console.log(i);
}

printNaturalNumbers(3, 3);
