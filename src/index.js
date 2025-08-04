const buildIndex = (docs) => {
  const index = {};
  docs.forEach(({ id, text }) => {
    const words = text.toLowerCase().match(/\w+/g) || [];
    const uniqueWords = new Set(words);
    uniqueWords.forEach((word) => {
      if (!index[word]) index[word] = new Set();
      index[word].add(id);
    });
  });
  // Преобразуем множества в массивы для удобства
  Object.keys(index).forEach((word) => {
    index[word] = Array.from(index[word]);
  });
  return index;
};

// 2. Подсчёт TF для документа
const getTf = (text) => {
  const words = text.toLowerCase().match(/\w+/g) || [];
  const tf = {};
  words.forEach((word) => {
    tf[word] = (tf[word] || 0) + 1;
  });
  return tf;
};

// 3. Поиск с TF-IDF
export default (docs, index, query) => {
  const terms = query.toLowerCase().match(/\w+/g);
  if (!terms) return [];

  const N = docs.length;
  const docScores = {};

  docs.forEach(({ id, text }) => {
    const tf = getTf(text);
    let score = 0;

    terms.forEach((term) => {
      if (!index[term]) return;
      const df = index[term].length;
      const idf = Math.log(N / df);
      const termTf = tf[term] || 0;
      score += termTf * idf;
    });

    if (score > 0) {
      docScores[id] = score;
    }
  });

  return Object.entries(docScores)
    .sort(([, a], [, b]) => b - a)
    .map(([id]) => id);
};
