function vowels(str) {
  const vowelList = ["a", "e", "i", "o", "u"];
  const strList = str.split("");
  let vowelCount = 0;

  for (let char of strList) {
    if (vowelList.indexOf(char) > -1) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}

module.exports = vowels;
