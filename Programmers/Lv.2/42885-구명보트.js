// 의식의 흐름
// 시간 복잡도를 생각하지 않은 코드
// function solution(people, limit) {
//     people.sort((a, b) => a - b); // 오름차순 정렬

//     let count = 0;

//     for (let i = 0; i < people.length / 2; i++) {
//         for (let j = people.length - 1 - i; j > i; j--) {
//             if (people[i] + people[j] <= limit) {
//                 count++;
//                 break;
//             }
//         }
//     }

//     count = count + (people.length - count * 2)

//     return count;
// }


function solution(people, limit) {
    people.sort((a, b) => a - b); // 오름차순 정렬

    let boatCount = 0;

    let leftIndex = 0; // 첫 기준이 되는 가장 가벼운 사람
    let rightIndex = people.length - 1; // 가장 무거운 사람

    while (leftIndex <= rightIndex) { // 전체 비교

        if (leftIndex === rightIndex) {
            // 더 비교해서 태울 사람이 없을 경우
            boatCount++; // 하나의 보트 추가
            break; // 비교 끝내기
        }

        if (people[leftIndex] + people[rightIndex] <= limit) {
            // 구명보트에 두 사람이 들어갈 수 있을 경우 boatCount + 1
            leftIndex++; // 다음 케이스로 몸무게가 같거나 더 무거운 사람으로 시작
            rightIndex--; // 다음 케이스로 몸무게가 같거나 더 가벼운 사람과 매칭
        } else { // 기준과 같이 탈 수 없음
            rightIndex--; // 기준에게 맞는 더 가벼운 사람 찾고 이 사람은 혼자 탄다 boatCount + 1
        }

        boatCount++; // boatCount + 1 처리
    }

    return boatCount;
}

console.log(solution([70, 50, 80, 50], 100)) // 3
console.log(solution([20, 30, 40, 50, 60, 70, 80, 90], 100)) // 5