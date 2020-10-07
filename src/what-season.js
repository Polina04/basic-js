const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (
    date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date)
  ) {
    const month = date.getMonth();
    if (month >= 2 && month < 5) return "spring";
    if (month < 2 || month === 11) return "winter";
    if (month >= 5 && month < 8) return "summer";
    if (month >= 8 && month < 11) return "fall";
  } else {
    throw new Error();
  }
};
