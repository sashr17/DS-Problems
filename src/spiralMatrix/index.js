const spiralMatrix = n => {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    // Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right Column
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start Column
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return result;
};

module.exports = spiralMatrix;
