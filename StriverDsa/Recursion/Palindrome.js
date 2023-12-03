// check a string is palindorme or not
let string = 'madam'.split('');
function isPalindrome(i) {
  let n = string.length;
  if (i >= n / 2) return true;

  if (string[i] != string[n - i - 1]) return false;
  return isPalindrome(i + 1);
}

console.log(isPalindrome(0));
