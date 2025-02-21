// Lv. 2 다리를 지나는 트럭
// https://school.programmers.co.kr/learn/courses/30/lessons/42583#

function solution(bridge_length, weight, truck_weights) {
    let bridge = [];  // [트럭무게, 진입시간]
    let totalWeight = 0;
    let time = 0;

    // 모든 트럭 처리
    while (truck_weights.length > 0) {
        time++;

        // 나갈 트럭이 있는지 확인
        if (bridge.length > 0 && bridge[0][1] + bridge_length <= time) {
            totalWeight -= bridge[0][0];
            bridge.shift();
        }

        // 다음 트럭이 들어갈 수 있는지 확인
        if (totalWeight + truck_weights[0] <= weight && bridge.length < bridge_length) {
            bridge.push([truck_weights[0], time]);
            totalWeight += truck_weights[0];
            truck_weights.shift();
        }
    }

    return bridge[bridge.length - 1][1] + bridge_length;
}

module.exports = solution;