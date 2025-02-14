const solution = require('../../Lv.3/43164-여행 경로');

describe("여행 경로", () => {
    test("주어진 항공권은 모두 사용해야 합니다.", () => {
        expect(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])).toEqual(["ICN", "JFK", "HND", "IAD"]);
    });

    test("만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.", () => {
        expect(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]])).toEqual(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);
    });

    test("알파벳 우선만이 최적이 아닐 경우", () => {
        expect(solution([["ICN", "BBB"], ["BBB", "ICN"], ["ICN", "AAA"]])).toEqual(["ICN", "BBB", "ICN", "AAA"]);
    });
});