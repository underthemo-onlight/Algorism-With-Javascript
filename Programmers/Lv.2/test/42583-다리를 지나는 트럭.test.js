const solution = require('../42583-다리를 지나는 트럭');

describe("다리를 지나는 트럭", () => {
    test("무게가 시간에 관여하는 케이스", () => {
        expect(solution(2, 10, [7, 4, 5, 6])).toBe(8);
    });

    test("무게와 길이 모두 시간에 관여하는 케이스", () => {
        expect(solution(10, 100, [50, 30, 10, 10, 30, 10, 40])).toBe(23);
    });
});
