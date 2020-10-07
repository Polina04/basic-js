const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const name = members
    .reduce((acc, value) => {
      if (typeof value === "string") {
        const firstLetter = value
          .trim()
          .slice(0, 1)
          .toUpperCase();
        acc += firstLetter;
        return acc;
      } else {
        return acc;
      }
    }, "")
    .split("")
    .sort()
    .join("");

  return name;
};
