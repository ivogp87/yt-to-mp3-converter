const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleString('en-US', options);
};

export default formatDate;
