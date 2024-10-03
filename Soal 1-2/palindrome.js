function isPalindrome(x) {
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  console.log(isPalindrome(121));  // true
  console.log(isPalindrome(-121)); // false
  console.log(isPalindrome(10));   // false
  