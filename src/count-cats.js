const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    const result = matrix[i].reduce((acc, i) => {
      i === "^^" ? (acc += 1) : acc;
      return acc;
    }, 0);
    counter += result;
  }
  return counter;
};
