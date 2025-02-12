const { solution, getElement } = require('../Lv.2/17677-뉴스 클러스터링');

describe("뉴스 클러스터링", () => {
    test("배열 생성1", () => {
        expect(getElement("FRANCE")).toEqual(["FR", "RA", "AN", "NC", "CE"]);
    });

    test("배열 생성2", () => {
        expect(getElement("french")).toEqual(["FR", "RE", "EN", "NC", "CH"]);
    });

    test("대소문자", () => {
        expect(solution("FRANCE", "french")).toBe(16384);
    });

    test("띄어쓰기", () => {
        expect(solution("handshake", "shake hands")).toBe(65536);
    });

    test("기호 및 중복된 요소", () => {
        expect(solution("aa1+aa2", "AAAA12")).toBe(43690);
    });

    test("기호 및 원소 없음", () => {
        expect(solution("E=M*C^2", "e=m*c^2")).toBe(65536);
    });
});
