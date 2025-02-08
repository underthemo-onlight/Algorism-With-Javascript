// Lv.2 소수찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {

    //1. 가능한 모든 숫자를 만들기 (만들 수 있는 모든 문자 === 문자열 길이에 상관없이 && 중복되지 않음 && 조합)
    const arr = Array.from(getAllSubsets(numbers));

    const primes = new Set(); // 중복되지 않도록 set 자료구조 사용
    //2. 소수를 판별하기
    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);

        if (isPrime(num)) {
            primes.add(num);
        }
    }

    //3. 소수 갯수 출력하기
    return primes.size;
}

function isPrime(num) {

    if (num <= 1) { // 음수와 1은 소수가 아니다
        return false;
    }

    if (num === 2) { // 2는 짝수 중 유일한 소수이다
        return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function getAllSubsets(numbers) {
    const result = new Set(); // 중복되지 않도록 set 자료구조 사용
    const splitedNumber = numbers.split('');
    const visited = new Array(splitedNumber.length).fill(false); // 사용한 숫자는 표시

    function combine(visited, current) {

        for (let i = 0; i < splitedNumber.length; i++) {
            if (current.length === numbers.length) {
                continue;
            }

            if (!visited[i]) {
                const newCombination = current + splitedNumber[i];
                result.add(newCombination);
                visited[i] = true;
                combine(visited, newCombination);
                visited[i] = false; // backtracking
            }
        }
    }

    combine(visited, '');
    return result;
}

module.exports = { solution, isPrime, getAllSubsets };