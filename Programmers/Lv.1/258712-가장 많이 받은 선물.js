// 가장 많이 받은 선물
// https://school.programmers.co.kr/learn/courses/30/lessons/258712

// 이중 map 구조
// function solution1(friends, gifts) {
//     let history = new Map();

//     // 주고받은 선물을 표로 나타내기
//     gifts.map(gift => {
//         const [giver, taker] = gift.split(" ");

//         if (!history.has(giver)) { // 준 사람이 없을 때 새 giver 맵 생성
//             let giverMap = new Map();
//             giverMap.set(taker, 1);
//             history.set(giver, giverMap)
//         } else if (!history.get(giver).has(taker)) { // 준 사람은 있지만 받은 사람은 없을 때 giver 맵에 새로운 키-값 추가
//             history.get(giver).set(taker, 1);
//         } else if (history.get(giver).has(taker)) { // 준 사람도 받은 사람도 있을 때 giver 맵 업데이트
//             const currentCount = history.get(giver).get(taker);
//             history.get(giver).set(taker, currentCount + 1);
//         }
//     })

//     // 선물 지수(점수) 저장하기
//     let giftScores = new Array(friends.length).fill(0);

//     friends.forEach((friend, index) => {

//         let givenCount = 0;
//         let takenCount = 0;

//         // 준 선물 세기
//         if (history.has(friend)) {
//             for (const count of history.get(friend).values()) {
//                 givenCount += count;
//             }
//         }

//         // 받은 선물 세기
//         for (const giverMap of history.values()) {
//             if (giverMap.has(friend)) {
//                 takenCount += giverMap.get(friend);
//             }
//         }

//         giftScores[index] = givenCount - takenCount;
//     })

//     let presentToReceive = new Array(friends.length).fill(0);

//     // 비교하기
//     for (let i = 0; i < friends.length; i++) {
//         for (let j = i + 1; j < friends.length; j++) {
//             const a = friends[i];
//             const b = friends[j];

//             let aValue = 0;
//             let bValue = 0;

//             if ((history.has(a) && history.get(a).has(b)) ||
//                 (history.has(b) && history.get(b).has(a))) {
//                 aValue = (history.has(a) && history.get(a).has(b)) ? history.get(a).get(b) : 0;
//                 bValue = (history.has(b) && history.get(b).has(a)) ? history.get(b).get(a) : 0;

//                 if (aValue > bValue) {
//                     presentToReceive[i] += 1;
//                 } else if (aValue === bValue) {
//                     //선물지수 체크
//                     if (giftScores[i] > giftScores[j]) {
//                         presentToReceive[i] += 1;
//                     } else if (giftScores[i] < giftScores[j]) {
//                         presentToReceive[j] += 1;
//                     }
//                 } else {
//                     presentToReceive[j] += 1;
//                 }
//             } else {
//                 //선물지수 체크
//                 if (giftScores[i] > giftScores[j]) {
//                     presentToReceive[i] += 1;
//                 } else if (giftScores[i] < giftScores[j]) {
//                     presentToReceive[j] += 1;
//                 }
//             }

//         }
//     }

//     return Math.max.apply(null, presentToReceive);

// }

function solution2(friends, gifts) {

    const friendsCount = friends.length;

    let history = new Array(friendsCount);
    for (var i = 0; i < friendsCount; i++) {
        history[i] = new Array(friendsCount);
        history[i].fill(0);
    }

    // 주고받은 선물을 표로 나타내기
    gifts.map(gift => {
        const [giver, taker] = gift.split(" ");

        giverIndex = friends.indexOf(giver);
        takerIndex = friends.indexOf(taker);

        history[giverIndex][takerIndex] += 1;
    })

    // 선물 지수(점수) 저장하기
    let giftScores = new Array(friendsCount).fill(0);

    for (let i = 0; i < friendsCount; i++) {
        let giveScore = 0;
        let takeScore = 0;

        for (let j = 0; j < friendsCount; j++) {
            giveScore += history[i][j];
            takeScore += history[j][i];
        }

        giftScores[i] = giveScore - takeScore;
    }

    const result = new Array(friendsCount).fill(0);
    // 내역과 선물지수를 비교하여 선물 주고받기
    for (let i = 0; i < friendsCount - 1; i++) {
        for (let j = i; j < friendsCount; j++) {
            const compareHistoryValue = history[i][j] - history[j][i];
            if (compareHistoryValue > 0) result[i] += 1;
            else if (compareHistoryValue < 0) result[j] += 1;
            else if (compareHistoryValue === 0) { //선물 받은 내역이 같거나 없으면 선물 지수를 비교하기
                if (giftScores[i] - giftScores[j] > 0) result[i] += 1;
                else if (giftScores[i] - giftScores[j] < 0) result[j] += 1;
            }
        }
    }

    return Math.max.apply(null, result);
}


console.log(solution2(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))