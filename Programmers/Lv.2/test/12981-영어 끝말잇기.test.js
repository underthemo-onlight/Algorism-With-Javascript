const solution = require('../12981-영어 끝말잇기');

describe("영어 끝말잇기", () => {
    test("틀리지 않고 끝까지 진행되는 경우", () => {
        expect(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])).toEqual([0, 0]);
    });

    test("끝말잇기에서 틀리는 경우", () => {
        expect(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])).toEqual([1, 3]);
    });

    test("같은 단어가 나오는 경우", () => {
        expect(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])).toEqual([3, 3]);
    });
});

//npm test Programmers/Lv.2/test/"12981-영어 끝말잇기.test.js" 