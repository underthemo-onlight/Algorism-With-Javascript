// Lv.2 k진수에서 소수 개수 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
    let answer = 0;

    const converted = n.toString(k);
    let array = converted.split("0");

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "1" || array[i] === "") {
            array.splice(i, 1);
            i--;
        } else {
            if (isPrime(Number(array[i]))) {
                answer++;
            }
        }
    }
    return answer;
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = solution;