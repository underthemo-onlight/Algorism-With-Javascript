// Lv. 1 크레인 인형뽑기 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {

    let basket = []; // 스택 구조 LIFO
    let basketIdx = 0;

    let answer = 0;

    for (let i = 0; i < moves.length; i++) {
        const x = moves[i] - 1;
        let y = 0;

        if (board[board.length - 1][x] === 0) continue; // 해당 열에 아무 인형도 없을 경우 pass

        for (let j = 0; j < board.length; j++) {
            if (board[j][x] !== 0) {
                basket[basketIdx] = board[j][x];
                board[j][x] = 0;
                break;
            }
        } // 뽑은 인형을 바스켓에 추가하기

        // 뽑은 인형끼리 체크
        if (basketIdx > 0 && basket[basketIdx] === basket[basketIdx - 1]) { // 전에 뽑은 인형과 같을 경우 두 인형 사라짐
            basket[basketIdx] = null
            basket[basketIdx - 1] = null;
            answer += 2;
            basketIdx -= 1;
        }
        else { // 전에 뽑은 인형과 다를 경우 사라지는 인형 없이 지속
            basketIdx += 1;
        }
    }

    return answer;
}




console.log([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]) // 4