// Parse the search term from the url. Returns false if there's no ?term= or the value is empty
export const parseQueryString = (queryString) => {
  const haveTerm = queryString.includes('?term=');
  if (haveTerm) {
    const searchTerm = queryString.replace('?term=', '');
    return searchTerm === '' ? false : searchTerm;
  }

  return false;
};