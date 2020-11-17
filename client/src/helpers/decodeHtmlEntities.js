// Decodes HTML entities
const decodeHtmlEntities = (string) => {
  const map = {
    '&amp;': '&',
    '&quot;': '"',
    '&#39;': "'",
    '&#96;': '`',
  };

  return string.replace(/&amp;|&quot;|&#39;|&#96;/gi, (match) => map[match]);
};

export default decodeHtmlEntities;
