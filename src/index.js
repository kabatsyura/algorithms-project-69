import search from "./search-engine/search.js";

const doc1 = {
  id: "doc1",
  text: "I can't shoot straight unless I've had a pint!",
};
const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: "doc3", text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

const result = search(docs, "shoot");
const result2 = search(docs, "pint"); // ['doc1']
const result3 = search(docs, "pint!"); // ['doc1']

console.log(result, result2, result3); // => ['doc1', 'doc2']
