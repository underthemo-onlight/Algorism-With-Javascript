// Lv.2 2018 KAKAO BLIND RECRUITMENT [1차] 뉴스 클러스터링
// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
    let set1 = getElement(str1);
    let set2 = getElement(str2);

    // 4. 자카드 유사도 = 교집합/합집합
    let intersection = 0;
    let tempSet2 = [...set2];  // set2의 복사본 생성

    for (let element of set1) {
        let index = tempSet2.indexOf(element);
        if (index !== -1) { // 중복된 원소 제거
            intersection++;
            tempSet2.splice(index, 1);
        }
    }

    const union = set1.length + set2.length - intersection;

    let jacquard = union === 0 ? 1 : intersection / union; // 둘다 공집합일땐 1

    // 5. 자카드 유사도 * 65536, 소숫점 아래는 버림
    return Math.floor(jacquard * 65536);
}

function getElement(str) {
    // 1. str1, str2를 모두 대문자로 바꾼다
    const convertedStr = str.toUpperCase();
    const regex = /^[a-z|A-Z]+$/;
    const set = new Array();

    // 2. 두 글자씩 끊어 원소로 만들며, 중복을 허용한다 (= 배열)
    for (let i = 0; i < convertedStr.length - 1; i++) {
        const element = convertedStr.substring(i, i + 2);
        if (regex.test(element)) { // 3. 특수문자가 있는 경우는 삭제한다.
            set.push(element);
        }
    }
    return set;
}

module.exports = { solution, getElement };