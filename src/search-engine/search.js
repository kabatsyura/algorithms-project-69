export default (items, token) => {
  const term = token.toLowerCase().match(/\w+/g);
  if (!term) return [];

  return items
    .filter((item) => {
      const words = item.text.match(/\w+/g);
      return words.some((word) => term.includes(word.toLowerCase()));
    })
    .map((obj) => obj.id);
};
