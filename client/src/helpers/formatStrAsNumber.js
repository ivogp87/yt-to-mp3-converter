// Formats number-like string. Returns string!
// Example (argument -> result): '500' -> '500'; '1200' -> '1K'; '150600' -> '150K'; '5373000' -> '5.3M'
const formatStrAsNumber = (str) => {
  // Convert the string to number
  const num = Number(str);

  // Return the string if the input can't be converted to number OR if the number is less than 1000
  if (Number.isNaN(num) || num < 1000) return str;

  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')} B`;
  }

  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')} M`;
  }

  return `${Math.trunc(num / 1000).toString()} K`;
};

export default formatStrAsNumber;
