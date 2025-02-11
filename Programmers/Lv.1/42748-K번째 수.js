function solution(array, commands) {
    const answer = [];

    for (let i = 0; i < commands.length; i++) {
        let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
        slicedArray.sort((a, b) => a - b);
        answer.push(slicedArray[commands[i][2] - 1]);
    }

    return answer;
}

console.log([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]); //[5, 6, 3]