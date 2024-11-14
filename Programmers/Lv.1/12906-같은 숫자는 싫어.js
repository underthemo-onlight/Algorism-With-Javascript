function solution(arr) {
    let index = -1;
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (answer[index] !== arr[i]) {
            answer.push(arr[i]);
            index += 1;
        }
    }

    return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
console.log(solution([4, 4, 4, 3, 3])); // [4, 3]