const solution = require('../42842-카펫');

describe("카펫", () => {
    test("1st", () => {
        expect(solution(10, 2)).toEqual([4, 3]);
    });

    test("2nd", () => {
        expect(solution(8, 1)).toEqual([3, 3]);
    });

    test("3rd", () => {
        expect(solution(24, 24)).toEqual([8, 6]);
    });
});
