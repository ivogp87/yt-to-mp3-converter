// Parse the search term from the url. Returns false if there's no term param or the value is empty
export const parseQueryString = (queryString) => {
  const haveTerm = queryString.includes('?term=');
  if (haveTerm) {
    const searchTerm = queryString.replace('?term=', '');
    return searchTerm === '' ? false : searchTerm;
  }

  return false;
};

// Formats a numbers bigger than 999 like this: 1000 -> 1k; 150 000 -> 150K, etc
export const formatNumber = (num) => {
  // The input is not a number
  if (Number.isNaN(num)) return num;

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

// Format date - ex: Jun 30, 2020
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleString('en-US', options);
};

// Decode HTML entities
export const decodeHtmlEntities = (string) => {
  const map = {
    '&amp;': '&',
    '&quot;': '"',
    '&#39;': "'",
    '&#96;': '`',
  };

  return string.replace(/&amp;|&quot;|&#39;|&#96;/gi, (match) => map[match]);
};
