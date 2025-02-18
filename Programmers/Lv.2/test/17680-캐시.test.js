const solution = require('../17680-캐시');

describe("캐시", () => {
    test("모든 데이터가 cache miss", () => {
        expect(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toBe(50);
    });

    test("모든 데이터가 cache hit", () => {
        expect(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])).toBe(21);
    });

    test("각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다.", () => {
        expect(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])).toBe(16);
    });
});
