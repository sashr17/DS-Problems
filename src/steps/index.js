function steps(n) {
  for (let row = 0; row < n; row++) {
    let stairs = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }
    console.log(stairs);
  }
}

module.exports = steps;
