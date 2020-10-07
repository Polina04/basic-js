const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  const finalActivity = Number(sampleActivity);
  if (
    typeof sampleActivity !== "string" ||
    isNaN(finalActivity) ||
    finalActivity <= 0 ||
    finalActivity > MODERN_ACTIVITY
  )
    return false;

  const numerator = Math.log(finalActivity / MODERN_ACTIVITY);
  const denominator = LN2 / HALF_LIFE_PERIOD;

  const result = numerator / denominator;
  return -1 * Math.ceil(result);
};
