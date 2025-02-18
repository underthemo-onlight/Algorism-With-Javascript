// 실버1 연산자 끼워넣기
// https://www.acmicpc.net/problem/14888

function solution(input) {

    const [N, nums, operators] = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .split("\n")
        .map((v) => v.split(" ").map(Number));

    // Jest
    // const [N, nums, operators] = input
    //     .split("\n")
    //     .map(line => line.split(" ").map(Number));

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    const calculator = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => parseInt(a / b),
    ];

    function dfs(count, result) {
        if (count === N - 1) {
            min = Math.min(result, min);
            max = Math.max(result, max);
        } else {
            for (let i = 0; i < operators.length; i++) {
                if (operators[i] === 0) {
                    continue;
                }
                operators[i]--;
                dfs(count + 1, calculator[i](result, nums[count + 1]));
                operators[i]++;
            }
        }
    }

    dfs(0, nums[0]);

    // 백준 제출용 출력
    console.log(`${max ? max : 0}\n${min ? min : 0}`);

    // Jest
    return `${max ? max : 0}\n${min ? min : 0}`;
}

module.exports = solution;