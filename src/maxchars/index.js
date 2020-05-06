function maxchars(str) {
  const charsMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charsMap[char] = (charsMap[char] && charsMap[char] + 1) || 1;
  }

  for (let char in charsMap) {
    if (charsMap[char] > max) {
      max = charsMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxchars;
