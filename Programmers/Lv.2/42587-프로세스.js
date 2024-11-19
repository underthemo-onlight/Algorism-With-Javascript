// 프로그래머스 42587 프로세스
// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
    let repeat = true;

    let index = 0;
    let processExecuted = 0;

    while (repeat) {

        if (priorities[index] === Math.max.apply(null, priorities) && priorities[index] > 0) {
            priorities[index] = 0; // 실행됨 표시
            processExecuted += 1; // 실행된 프로세스 수 연산
        }
        index += 1; // 순회

        if (priorities[location] === 0) { // 원하는 프로세스가 실행됐을 때
            repeat = false; // 끝내기
            return processExecuted; // 결과 반환
        }

        if (index > priorities.length) { //순회를 위한 인덱스 초기화
            index = 0;
        }
    }

}

console.log([2, 1, 3, 2], 2); // 1
console.log([1, 1, 9, 1, 1, 1], 0) // 5