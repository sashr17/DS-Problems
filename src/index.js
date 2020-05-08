const reverse = require("./reverse-string");
const reverseInteger = require("./reverse-integer");
const palindrome = require("./palindrome");
const maxchars = require("./maxchars");
const fizzbuzz = require("./fizzbuzz");
const arrayChunks = require("./arrayChunks");
const anagram = require("./anagram");
const capitalize = require("./capitalize");
const steps = require("./steps");
const pyramid = require("./pyramid");
const vowels = require("./vowels");

console.log("********* Reverse String *******");
console.log(reverse("apple"));

console.log("********* Reverse Integer *******");
console.log(reverseInteger(-1));

console.log("********* Palindrome *******");
console.log(palindrome("aba"));

console.log("********* Max Chars *******");
console.log(maxchars("abccbb 122222"));

console.log("********* Fizzbuzz *******");
console.log(fizzbuzz(15));

console.log("********* Array Chunks *******");
console.log(arrayChunks([1, 2, 3, 4, 5], 2));

console.log("********* Anagram *******");
console.log(anagram("Hi There!", "there! hi!"));

console.log("********* Sentence Capitalize *******");
console.log(capitalize("hi there! how are you"));

console.log("********* Steps *******");
steps(4);

console.log("********* Pyramid *******");
pyramid(4);

console.log("********* Vowels *******");
console.log(vowels("hi there! how are you"));
