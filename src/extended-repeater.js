const additionRepeater = (str, count, separator) => {
  let result = "";
  const defaultSeparator = separator != undefined ? separator : "|";
  const defaultRepeatCount = count != undefined ? count : 1;
  for (let i = 1; i <= defaultRepeatCount; i++) {
    if (i === 1) {
      result += `${str}`;
    } else {
      result += defaultSeparator + `${str}`;
    }
  }
  return result;
};

module.exports = function repeater(str, options) {
  let result = "";
  const defaultSeparator =
    options.separator != undefined ? options.separator : "+";
  const defaultRepeatCount =
    options.repeatTimes != undefined ? options.repeatTimes : 1;
  for (let i = 1; i <= defaultRepeatCount; i++) {
    if (i === 1 && options.addition !== undefined) {
      const addition = additionRepeater(
        options.addition,
        options.additionRepeatTimes,
        options.additionSeparator
      );
      result += `${str}` + addition;
    } else if (i === 1) {
      result += `${str}`;
    } else if (i > 1 && options.addition !== undefined) {
      const addition = additionRepeater(
        options.addition,
        options.additionRepeatTimes,
        options.additionSeparator
      );
      result += defaultSeparator + `${str}` + addition;
    } else {
      result += defaultSeparator + `${str}`;
    }
  }
  return result;
};
