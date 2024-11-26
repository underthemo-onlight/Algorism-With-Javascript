// 프로그래머스 Lv.1 신고 결과 받기
// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    let countId = id_list.length;

    // 신고 내역 reportDetails 2차원 배열로 저장
    let reportDetails = Array.from({ length: countId }, () =>
        Array(countId).fill(false)
    );

    for (let i = 0; i < report.length; i++) {
        const [reporter, baduser] = report[i].split(" ");
        const reporterIdx = id_list.indexOf(reporter);
        const baduserIdx = id_list.indexOf(baduser)
        reportDetails[reporterIdx][baduserIdx] = true;
    }
    //console.log(reportDetails)

    // k번 이상 신고당한 사람 찾기
    const suspendedId = [];
    for (let i = 0; i < countId; i++) {
        let reportCount = 0;
        for (let j = 0; j < countId; j++) {
            if (reportDetails[j][i]) reportCount++;
        }
        if (reportCount >= k) {
            //suspendedId.push(id_list[i]);
            suspendedId.push(i);
        }
    }
    // console.log(suspendedId)

    // 신고한 사람(= 메일을 받을 사람)이 받을 메일 수 count
    const reportedIdx = new Array(countId).fill(0);
    for (let i = 0; i < countId; i++) {
        for (let j = 0; j < countId; j++) {
            if (reportDetails[i][j] && suspendedId.includes(j)) reportedIdx[i]++;
        }
    }

    return reportedIdx;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
//[2, 1, 1, 0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
//[0, 0]