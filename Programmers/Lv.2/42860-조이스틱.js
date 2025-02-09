// Lv.2 조이스틱
// https://school.programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

function solution(name) {
    // 각 문자를 쪼개기
    const charOfName = name.split("");
    let minMoves = name.length - 1; // 왼/오 이동 방향은 한번만 바뀐다
    let answer = 0;

    for (let i = 0; i < name.length; i++) {
        // A에서 시작하는 횟수와 Z에서 시작하는 횟수 비교해 더하기
        answer += moveToAlphabet(charOfName[i]);

        // 다음 숫자가 "A"일 경우 바꿔야 할 다음 인덱스 값 찾기
        let next = i + 1;
        while (next < name.length && charOfName[next] == "A") {
            next++;
        }

        // 왼쪽으로 가는게 빠를지 오른쪽으로 가는게 빠를지 비교하기
        if (next - i > 1) {
            // 오른쪽으로 가다가 왼쪽으로 가면 얼마나 걸리는가
            const distanceToLeftEnd = i * 2 + name.length - next;
            // 왼쪽으로 가다가 오른쪽으로 가면 얼마나 걸리는가
            const distanceToRightEnd = (name.length - next) * 2 + i;
            minMoves = Math.min(minMoves, distanceToLeftEnd);
            minMoves = Math.min(minMoves, distanceToRightEnd);
        }

    }
    return answer + minMoves;
}

function moveToAlphabet(char) {
    return Math.min(char.charCodeAt() - 65, 91 - char.charCodeAt());
}

module.exports = solution;