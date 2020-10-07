const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let newArray = [...arr];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "--discard-next") {
      newArray[i + 1] = undefined;
      newArray[i] = undefined;
    } else if (newArray[i] === "--discard-prev") {
      newArray[i] = undefined;
      newArray[i - 1] = undefined;
    } else if (newArray[i] === "--double-next") {
      newArray[i + 1] !== undefined
        ? (newArray[i] = newArray[i + 1])
        : (newArray[i] = undefined);
    } else if (newArray[i] === "--double-prev") {
      newArray[i - 1] !== undefined
        ? (newArray[i] = newArray[i - 1])
        : (newArray[i] = undefined);
    }
  }
  return newArray.filter(el => el !== undefined);
};
