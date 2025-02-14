// Lv.3 네트워크
// https://school.programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

function solution(n, computers) {
    let visited = new Array(n).fill(false);

    let numOfNetwork = 0;

    function dfs(index) {
        visited[index] = true;

        for (let nextIndex = 0; nextIndex < n; nextIndex++) {
            if (computers[index][nextIndex] && !visited[nextIndex]) {
                dfs(nextIndex);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            numOfNetwork++;
        }
    }

    return numOfNetwork;
}

module.exports = solution;