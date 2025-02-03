// Lv.2 N개의 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {

    let answer = arr[0];
    const seekGcd = (a, b) => a % b === 0 ? b : seekGcd(b, a % b); // 유클리드 호제법을 통한 최소공배수 찾는 함수

    for (let i = 1; i < arr.length; i++) {
        const gcd = seekGcd(answer, arr[i]); // 두 값을 비교해 최소 공배수 찾기
        answer = gcd * (answer / gcd) * (arr[i] / gcd);
    } // 반복하여 모든 값의 최소공배수 찾기

    return answer;
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6