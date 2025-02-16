const solution = require('../Lv.2/92335-k진수에서 소수 개수 구하기');

describe("k진수에서 소수 개수 구하기", () => {
    test("1", () => {
        expect(solution(437674, 3)).toBe(3);
    });

    test("2", () => {
        expect(solution(110011, 10)).toBe(2);
    });

});