const solution = require('../../Lv.3/43162-네트워크');

describe("네트워크", () => {
    test("그래프가 나눠져 있는 경우", () => {
        expect(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
    });

    test("모두 연결된 경우", () => {
        expect(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])).toBe(1);
    });
});