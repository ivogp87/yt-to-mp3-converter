// Formats date-like string. Returns string. Ex: Jun 30, 2020
const formatStrAsDate = (str) => {
  // convert the string to date
  const date = new Date(str);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleString('en-US', options);
};

export default formatStrAsDate;
