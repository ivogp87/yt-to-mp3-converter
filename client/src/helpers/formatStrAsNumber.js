// Formats number-like string (or number). Returns string!
// Formats a numbers bigger than 999 like this: 1000 -> 1k; 150 000 -> 150K, etc
const formatStrAsNumber = (str) => {
  // Return the string if the input is not a number or number-like string
  if (Number.isNaN(Number(str))) return str;

  // Convert the string to number
  const num = Number(str);

  // Numbers less than 1000 - return just the number as a string
  if (num < 1000) return num.toString();

  // If the number is equal to or bigger than 1000:

  // Format the number
  const formattedNum = num.toLocaleString('en-US');

  // Convert the formatted number into array
  const numArr = formattedNum.split(',');

  // Determine what sign to put after the number (K, M, B)
  let numberSign;
  switch (numArr.length) {
    case 2:
      numberSign = 'K';
      break;
    case 3:
      numberSign = 'M';
      break;
    case 4:
      numberSign = 'B';
      break;
    default:
      numberSign = '';
  }

  // Show fractional part only for numbers bigger than 1M
  const decimalPart = num > 1000000 && numArr[1].charAt(0) !== '0' ? `.${numArr[1].charAt(0)}` : '';

  // Return the formatted number
  return `${numArr[0] + decimalPart} ${numberSign}`;
};

export default formatStrAsNumber;
