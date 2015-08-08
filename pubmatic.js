//Find the longest palindrome in a string

// if xadfkbadablakdfxx, then the answer is badab



// Input: String
// Output: String (longest palindrome)

//iterate through the string
//array individual characters
//palindrome = same forwards and backwards
//empty string to build palindrome


function checkPalindrome(string){
  var strSplit = string.split('');
  var reverse = string.split('').reverse();
  for(var i = 0; i<strSplit.length; i++){
    if(strSplit[i] != reverse[i]){
      return false;
    }
  }
  return true;
}

function getLongestPalindrome(string){
  var lengthOfLongest = 0;
  var currentPalindrome = '';
  for(var i = 0; i < string.length; i++){
    var character = string[i];
    if(string[i-1] === string[i+1]){
      //checks for odd length palindromes
      for(var j = 1; j < string.length; j++){
        //we're going check from the center character iterate towards the left and right
        if(string[i-j] !== undefined && string[i+j] !== undefined){
          //if its undefined, we've reached the end of the string, there's not palindrome there
          var oddSubStr = string.substring((i-j),(i + j + 1));
          //this creates the substring to be tested if its a palindrome
          // i.e. if character == d and around it is a, then OddSubStr
          // will be "ada";
          
          if(checkPalindrome(oddSubStr)){
            // if the checkPalindrome function returns true, we're going to test its length
            // vs. the current palindrome
            if(lengthOfLongest < oddSubStr.length){
              lengthOfLongest = oddSubStr.length;
              currentPalindrome = oddSubStr;
            }
          } else {
            // returned false means its not a palindrome, break out of this loop
            break;
          }
        } else {
          //if one of the values is "undefined" and theres no palindrome, we break out of the loop
          break;
        }
      }
    } else if (character === string[i+1]){
      //if two characters are the same in a row, this could be an even length
      // palindrome, so we check that here
      for(var k = 0; k < string.length; k++){
        //we're going to check the character in question and 1 more to the right
        // so if its 'a' and next to it is 'baa', we're checking 'aa'
        // and then 'baac', which would fail and keep 'aa'
        if(string[i-k] !== undefined && string[i+k+1] !== undefined){
          var evenSubStr = string.substring((i-k), (i+k+2));
          //this creates the substring to be tested
          if(checkPalindrome(evenSubStr)){
            // if it returns true, we check it against the current length of the current palindrome
            if(lengthOfLongest < evenSubStr.length){
              lengthOfLongest = evenSubStr.length;
              currentPalindrome = evenSubStr;
            }
          } else {
            // returns false, break out of the loop
            break;
          }
        } else {
          // if one is undefined, we break out of the loop
          break;
        }
      }
    }
  }
  return currentPalindrome;
}
console.log(getLongestPalindrome('xadfkcadabldbakabddfxx'));

var tests = [
  ['xadfkbadablakdfxx', 'badab'],
  ['baab', 'baab'],
  ['xadfkcadabldbakabddfxx', 'dbakabd'],
  ['xxjfiabaaccaabfdsse', 'baaccaab'],
  ['dfjs', 'no palindromes!'],
  ['aabcd', 'aa'],
  ['dcfseaba', 'aba']
];
function testPalindromeFinder(){
  for(var i = 0; i<tests.length; i++){
    var test = tests[i];
    var output = getLongestPalindrome(test[0]);
    if(output === test[1]){
      console.log('your test passed! Input = ' + test[0] + ' and expected output = '+test[1]+'. Your output = ' + output);
    } else {
      console.log('your test failed. Expected output = ' + test[1] + " and you got " + output);
    }
  }
}
testPalindromeFinder();































