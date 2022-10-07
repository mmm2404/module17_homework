import {reverseString } from "../../utils/reverseString.js"; 
xdescribe("testing the reverseString function", () => {
    it("if the string was reversed correctly", () => {
        expect(reverseString("строка")).toBe("акортс");

    })
});