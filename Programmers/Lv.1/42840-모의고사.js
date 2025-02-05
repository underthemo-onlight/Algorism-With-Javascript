// Lv.1 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function solution(answers) {
    const supoja1 = [1, 2, 3, 4, 5];
    const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const score = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === supoja1[i % 5]) score[0]++;
        if (answers[i] === supoja2[i % 8]) score[1]++;
        if (answers[i] === supoja3[i % 10]) score[2]++;
    }

    const max = Math.max(...score);
    let answer = [];
    for (let i = 0; i < score.length; i++) {
        if (max === score[i]) {
            answer.push(i + 1);
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5])) // [1]
console.log(solution([1, 3, 2, 4, 2])) // [1, 2, 3]