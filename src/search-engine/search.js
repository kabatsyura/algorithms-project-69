export default (items, word) => {
  return items
    .filter((item) => {
      const words = item.text.split(/\W+/);
      return words.includes(word.toLowerCase());
    })
    .map((obj) => obj.id);
};
