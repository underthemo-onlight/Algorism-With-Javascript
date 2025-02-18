const solution = require('../87946-피로도');

describe("피로도", () => {
    test("1", () => {
        expect(solution(80, [[80, 20], [50, 40], [30, 10]])).toBe(3);
    });

    test("2", () => {
        expect(solution(4, [[4, 3], [2, 2], [2, 2]])).toBe(2);
    });

});
