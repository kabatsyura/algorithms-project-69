export default (items, token) => {
  const term = token.toLowerCase().match(/\w+/g);
  if (!term) return [];

  return items
    .map((item) => {
      const words = item.text.match(/\w+/g);
      const count = words.reduce(
        (acc, word) => (term.includes(word.toLowerCase()) ? acc + 1 : acc),
        0
      );

      return { id: item.id, count };
    })
    .filter((item) => item.count > 0)
    .sort((obj1, obj2) => obj2.count - obj1.count)
    .map((obj) => obj.id);
};
