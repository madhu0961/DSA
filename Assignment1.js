// 1. Minimum of three numbers
function minOfThreeNums(a, b, c) {
  console.log('Minimum of three:' + Math.min(a, b, c));
}
minOfThreeNums((a = 10), (b = 20), (c = 30));

// 2. check couple is eligible for marriage (girl age should be 18 boy should be 21) print yes or no
function checkCoupleAge(girlAge, boyAge) {
  girlAge >= 18 && boyAge >= 21 ? console.log('Yes') : console.log('NO');
}
checkCoupleAge((girlAge = 17), (boyAge = 21));

// 3. print tax amount if bill amount is 50000 above then tax is 10% else 5% , using ternary operator
function getTaxAmount(amount) {
  amount >= 50000
    ? console.log('Tax Amount: ' + 0.1 * amount)
    : console.log('Tax Amount: ' + 0.05 * amount);
}
getTaxAmount((amount = 5000));

// 4. check year is leap or not

function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a leap Year`);
  } else {
    console.log(`${year} is not a leap Year`);
  }
}
checkLeapYear((year = 2024));
// 5. check number is odd or not, print odd or even
function checkEvenOrOdd(n) {
  if (n % 2 == 0) return console.log(`Given number ${n} is Even`);
  else return console.log(`Given number ${n} is Odd`);
}
checkEvenOrOdd(10);
