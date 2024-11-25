function solution(id_list, report, k) {
    let countId = id_list.length;

    // 신고 내역 reportDetails
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

    // 2번 이상 신고당한 사람 찾기
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