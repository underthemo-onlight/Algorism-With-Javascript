// Lv.3 여행 경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164?language=javascript#

function solution(tickets) {
    tickets.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1].localeCompare(b[1]);
        } else {
            return a[0].localeCompare(b[0]);
        };
    });

    let usedTickets = new Array(tickets.length).fill(false);
    let route = new Array();

    function dfs(now) {
        if (route.length === tickets.length + 1) {
            return true;
        }

        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i][0] === now && !usedTickets[i]) {
                route.push(tickets[i][1]);
                usedTickets[i] = true;

                // 다음 경로 탐색
                if (dfs(tickets[i][1])) {
                    return true; // 유효한 경로를 찾았으면 종료
                }

                route.pop();
                usedTickets[i] = false;
            }
        }
        return false;
    }

    route.push("ICN");
    dfs("ICN");

    return route;
}

module.exports = solution;