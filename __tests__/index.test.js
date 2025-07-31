import { describe, expect, test } from "@jest/globals";
import search from "../src/search-engine/search.js";

describe("Test search function", () => {
  const doc1 = {
    id: "doc1",
    text: "I can't shoot straight unless I've had a pint!",
  };
  const doc2 = {
    id: "doc2",
    text: "Don't shoot shoot shoot that thing at me.",
  };
  const doc3 = { id: "doc3", text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];

  test("It successfull test", () => {
    const result = search(docs, "shoot");
    expect(result).toEqual(["doc1", "doc2"]);
  });

  test("Without matches", () => {
    const result = search(docs, "absentword");
    expect(result).toEqual([]);
  });

  test("It successfull with capital words", () => {
    const result = search(docs, "SHOOT");
    expect(result).toEqual(["doc1", "doc2"]);
  });
});
