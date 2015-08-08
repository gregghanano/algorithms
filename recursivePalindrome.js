// Write a function which determines if a given string is a palindrome.
//    Recursion is not the only solution here, and it's certainly not the fastest,
//    but it's elegant :)
// base case = if string is less than <= 2, return true
// general case = if first character and last character are equal, slice those off and run the function again
// with the shorter string.

function palindrome(string){
  if(string.length < 2){
    return true;
  }
  var firstChar = string.charAt(0);
  var lastChar = string.charAt(string.length-1);
  if(firstChar === lastChar){
    newStr = string.slice(1, -1);
    return palindrome(newStr);
  } else {
    return false;
  }
}
console.log(palindrome('racecar'));
console.log(palindrome('abba'));
console.log(palindrome('fjsklaf'));