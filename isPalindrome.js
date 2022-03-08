// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    let reversedText = x.toLowerCase().split('').reverse().join('')
    return reversedText === x.toLowerCase() ;
  }