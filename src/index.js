const reverse = require("./reverse-string");
const reverseInteger = require("./reverse-integer");
const palindrome = require("./palindrome");
const maxchars = require("./maxchars");
const fizzbuzz = require("./fizzbuzz");

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
