const solution = require('../43163-단어변환');

describe("단어변환", () => {
    test("변환 가능한 경우", () => {
        expect(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])).toBe(4);
    });

    test("변환할 수 없는 경우에는 0를 return 합니다.", () => {
        expect(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toBe(0);
    });
});