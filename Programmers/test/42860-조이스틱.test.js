const solution = require('../Lv.2/42860-조이스틱');

describe("조이스틱", () => {
    test("모든 것을 순회해야하는 경우", () => {
        expect(solution("JEROEN")).toBe(56);
    });

    test("뒤로 가야하는 경우", () => {
        expect(solution("JAN")).toBe(23);
    });

    test("오른쪽으로 가다가 왼쪽으로 가야하는 경우", () => {
        expect(solution("ABAAAAAAAAABB")).toBe(7);
    });
});
