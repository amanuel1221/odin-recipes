
const  {greeting}  = require('./greeting');

describe("greeting", () => {
  test("returns the correct greeting", () => {
    expect(greeting).toEqual("Hello, Amanuel Amare You are 21 years old.");

  });
  test("returns not the correct greeting", () => {
    expect(greeting).not.toEqual("Hello, Amanuel Amare You are 20 years old.");
  });
});