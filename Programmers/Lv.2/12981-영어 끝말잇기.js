// Lv.2 영어 끝말잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {

    let usedWords = new Array();
    let order = 0;

    usedWords.push(words.shift());

    while (words.length > 0) {
        const lastWord = usedWords[order];
        const nowWord = words.shift();

        // 이미 말했던 단어이거나, 끝말잇기가 안되는 경우
        if (usedWords.includes(nowWord) ||
            lastWord.slice(-1) !== nowWord.slice(0, 1)) {
            return [((order + 1) % n) + 1, Math.floor((order + 1) / n) + 1];
        }

        usedWords.push(nowWord);
        order++;
    }

    return [0, 0];
}

module.exports = solution;