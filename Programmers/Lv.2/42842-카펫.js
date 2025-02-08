// Lv.2 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
    // 항상 brown의 4개는 모서리에 사용된다.
    // (length + height) * 2 + 4 = brown
    // length * height = yellow
    // 가로(length) >= 세로 (height)

    for (let h = 1; h < ((brown - 4) / 2); h++) { // 세로가 될 수 있는 수
        const l = (brown - 4) / 2 - h; // 가로가 될 수 있는 수
        if (Number.isInteger(l) && (h * l === yellow)) {
            return [l + 2, h + 2];
        }
    }
}

module.exports = solution;