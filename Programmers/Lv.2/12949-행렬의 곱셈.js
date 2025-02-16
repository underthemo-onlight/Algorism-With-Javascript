// Lv.2 행렬의 곱셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
    const arr1_col = arr1.length;
    const arr2_row = arr2[0].length;

    let answer = [];

    for (let x = 0; x < arr1_col; x++) {
        let rowOfAnswer = [];
        for (let y = 0; y < arr2_row; y++) {
            rowOfAnswer.push(getElement(arr1, arr2, y, x));
        }
        answer.push(rowOfAnswer);
    }
    return answer;
}

function getElement(arr1, arr2, col, row) {
    let element = 0;
    for (let i = 0; i < arr2.length; i++) {
        element += arr1[row][i] * arr2[i][col];
    }
    return element;
}

module.exports = { solution, getElement };