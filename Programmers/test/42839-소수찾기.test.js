const { solution, isPrime, getAllSubsets } = require('../Lv.2/42839-소수찾기');

describe("소수찾기", () => {
    test("일반적인 케이스", () => {
        expect(solution("17")).toBe(3);
    });

    test("중복된 숫자와 0이 있는 경우", () => {
        expect(solution("011")).toBe(2);
    });
});
