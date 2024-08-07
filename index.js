//**1. Write a function that return the reverse of a string. */
function main(str) {
  //   let reverseStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reverseStr += str[i];
  //   }
  //     return reverseStr;
  //*NOTE -  now we will do it by one line of code
  return str.split("").reverse().join("");
}
const result = main("Arifa");
console.log(result);

//**2. Write a function that returns the longest word in the sentence. */
function getLongestWord(sentence) {
  let longestWord = "";
  const words = sentence.split(" ");
  console.log(words);
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
const longestWord = getLongestWord("Arifa Moni Congratulations");
console.log( longestWord );

//**3. Write a function that checks whether a given string is a palindrome or not. */
function checkPalindrome(str) {
  return str === str.split().reverse().join("");
}
const isPalindrome = checkPalindrome("racecar");
console.log( isPalindrome );

//**4. Write a function to remove duplicate elements from an array */
function removeDuplicate(arr) {
  return [...new Set(arr)];
}
const removeDup = removeDuplicate([1, 2, 3, 4, 4]);
console.log(removeDup);
//**5. Write a function that checks whether tow strings are anagrams or not. */
//**6. Write a function that returns the number of vowels in a string. */
//**7. Write a function to find the largest number in an array. */
//**8. Write a function to check if a given number is prime or not. */
//**9. Write a function to calculate the factorial of a number */
//**10. Write a program to remove all whitespace characters from a string */
