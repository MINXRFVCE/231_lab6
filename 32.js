function titleToNumber(title) {
  let columnNumber = 0;
  for (let i = 0; i < title.length; i++) {
    columnNumber *= 26;
    columnNumber += (title.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }
  return columnNumber;
}