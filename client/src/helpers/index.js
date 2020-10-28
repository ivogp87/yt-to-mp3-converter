// Parse the search term from the url. Returns false if there's no ?term= or the value is empty
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
  if (Number.isNaN(num)) return '0';

  // Numbers less than 1000 - return just the number as a string
  if (num < 1000) return num.toString();

  // If the number is equal to or bigger than 1000:
  // Format the number
  const formattedNum = num.toLocaleString('en-US');
  // Convert the formatted number into array
  const numArr = formattedNum.split(',');
  // Determine what sign to put after the number (K, M, B, T)
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
    case 5:
      numberSign = 'T';
      break;
    default:
      numberSign = '';
  }

  // Return the first item from the array and the numberSign
  return `${numArr[0]} ${numberSign}`;
};

// Format date - ex: Jun 30, 2020
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleString('en-US', options);
};
