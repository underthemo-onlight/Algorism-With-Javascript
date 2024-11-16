// 프로그래머스 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s) {
    const parentheses = s.split("");
    const stack = [];
    let index = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "\(") {
            stack.push("\(");
            index += 1;
        } else {
            if (stack[index] !== "\(") return false;
            stack.pop();
            index -= 1;
        }
    }

    if (stack.length !== 0) return false;

    return true;
}