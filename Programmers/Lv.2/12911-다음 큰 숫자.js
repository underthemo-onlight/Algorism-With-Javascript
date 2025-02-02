// 프로그래머스 12911 다음 큰 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
    const nToBinary = n.toString(2);
    const countOne = nToBinary.split('1').length - 1;

    let number = n + 1 // 조건 1

    while (true) {
        const countOneOfNumber = number.toString(2).split('1').length - 1;
        if (countOne === countOneOfNumber) { // 조건 2
            break; // 조건 3
        } else {
            number++;
        }
    }

    return number;
}

console.log(solution(78)) // 83
console.log(solution(15)) // 23