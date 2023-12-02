//print 1-N natural numbers using recursion
function printNaturalNumbers(i, n) {
  if (i > n) return;
  console.log(i);
  printNaturalNumbers(i + 1, n);
}

printNaturalNumbers((i = 1), (n = 10));
