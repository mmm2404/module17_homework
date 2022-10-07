import { getMonth } from "../../utils/getMonth.js";
describe("testing getMonth function", () => {
    it("check if number reflects the correct month", () => {
    expect(getMonth(12)).toBe('декабрь');   
    });
    it("check if number less or greater then 12 returns correct error massage", () => {
    expect(getMonth(0)).toBe("неизвестно");
    });
    it("check if empty imput returns correct error massage", () => {
    expect(getMonth("")).toBe("введите число");
    });
    it("check if ...", () => {
    expect(getMonth(1)).toContain("январь");
    });
    it("check if ...", () => {
    expect(getMonth(1)).not.toBe("февраль");
    });
});


