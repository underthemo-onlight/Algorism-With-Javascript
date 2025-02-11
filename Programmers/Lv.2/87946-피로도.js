// Lv.2 피로도
// https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);

    function dfs(count, k, visited) {
        for (let i = 0; i < dungeons.length; i++) {
            if (k >= dungeons[i][0] && !visited[i]) {
                visited[i] = true;
                dfs(count + 1, k - dungeons[i][1], visited)
                visited[i] = false;
            }
            answer = Math.max(answer, count);
        }
    }
    dfs(0, k, visited);

    return answer;
}

module.exports = solution;