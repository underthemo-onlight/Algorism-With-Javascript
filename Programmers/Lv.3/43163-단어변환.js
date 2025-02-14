// Lv.3 단어변환
// https://school.programmers.co.kr/learn/courses/30/lessons/43163?language=javascript

function solution(begin, target, words) {

    // target이 words에 없으면 0 반환
    if (!words.includes(target)) return 0;

    const changed = new Array(words.length).fill(false);

    let minCourse = Infinity;

    function compareWords(nowWord, count) {
        if (nowWord === target) {
            minCourse = Math.min(minCourse, count);
            return;
        }

        const nowWordArray = nowWord.split("");

        for (let i = 0; i < words.length; i++) {
            if (!changed[i]) {
                const compareWordArray = words[i].split("");
                let differences = 0;

                for (let j = 0; j < nowWord.length; j++) { // 두 문자 비교
                    if (compareWordArray[j] !== nowWordArray[j]) {
                        differences++;
                    }
                }

                if (differences === 1) { // 변환 가능할 경우
                    changed[i] = true;
                    compareWords(words[i], count + 1);
                    changed[i] = false;
                }
            }
        }
    }

    compareWords(begin, 0);
    return minCourse === Infinity ? 0 : minCourse;
}

module.exports = solution;