

const {sum,product,capitalization,last} = require('./add7');

describe("add7", () =>{
    test("returns the correct sum", () => {
        expect(sum).toEqual(10);
    });
    test("returns the correct product", () => {
        expect(capitalization).toEqual("Hello");
    });
    test("returns the correct last letter", () => {
        expect(last).toEqual("d");
    });
});