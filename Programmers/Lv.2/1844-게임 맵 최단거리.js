// Lv.2 게임 맵 최단거리
// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// 백트래킹으로 진입
// function solution(maps) {

//     const COLUMN = maps.length;
//     const ROW = maps[0].length;
//     const visited = new Array(COLUMN);

//     for (let i = 0; i < COLUMN; i++) {
//         visited[i] = new Array(ROW).fill(false);
//     }

//     let moveMin = Number.MAX_SAFE_INTEGER;

//     function backtrack(x, y, count) {
//         if (x === ROW - 1 && y === COLUMN - 1) {
//             moveMin = Math.min(count, moveMin);
//             return;
//         }

//         if (x < ROW - 1 && !visited[y][x + 1] && maps[y][x + 1]) { // 좌
//             visited[y][x + 1] = true;
//             backtrack(x + 1, y, count + 1);
//             visited[y][x + 1] = false;
//         }
//         if (x > 0 && !visited[y][x - 1] && maps[y][x - 1]) { //우
//             visited[y][x - 1] = true;
//             backtrack(x - 1, y, count + 1);
//             visited[y][x - 1] = false;
//         }
//         if (y > 0 && !visited[y - 1][x] && maps[y - 1][x]) { //상
//             visited[y - 1][x] = true;
//             backtrack(x, y - 1, count + 1);
//             visited[y - 1][x] = false;
//         }
//         if (y < COLUMN - 1 && !visited[y + 1][x] && maps[y + 1][x]) { //하
//             visited[y + 1][x] = true;
//             backtrack(x, y + 1, count + 1);
//             visited[y + 1][x] = false;
//         } // 나도 쓰면서 의심했었다... BFS를 기억해내지 못해서... 그리고 상하좌우를 두 배열로 정리하지 못했던 점
//     }

//     visited[0][0] = true;
//     backtrack(0, 0, 1);

//     return moveMin == Number.MAX_SAFE_INTEGER ? -1 : moveMin;
// }

// 하지만 상하좌우를 전부 체크하며, 모든 탐색을 진행해야 최단거리를 알 수 있으므로, BFS(너비 우선 탐색)이 효율적이다.
function solution(maps) {

    const COLUMN = maps.length;
    const ROW = maps[0].length;
    const visited = new Array(COLUMN);

    for (let i = 0; i < COLUMN; i++) {
        visited[i] = new Array(ROW).fill(false);
    }

    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    visited[0][0] = true;
    const queue = [[0, 0, 1]]; // [x, y, count]

    while (queue.length > 0) {
        const [x, y, count] = queue.shift(); // 첫번째(먼저 들어온 요소, FIFO) 빼기

        if (x === ROW - 1 && y === COLUMN - 1) {
            return count;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < ROW && nx >= 0 && ny < COLUMN && ny >= 0 &&
                !visited[ny][nx] && maps[ny][nx]) { // 이 과정에서 교차점은 탈락한다
                visited[ny][nx] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }

    return -1;
}

module.exports = solution;