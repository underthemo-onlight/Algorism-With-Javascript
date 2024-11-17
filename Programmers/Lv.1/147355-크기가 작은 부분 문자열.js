function solution(t, p) {

    let smallerThanP = [];
    for (let i = 0; i < t.length - p.length + 1; i++) {
        const spliceResult = t.substr(i, p.length);
        if (spliceResult <= p) smallerThanP.push(spliceResult);
    }

    return smallerThanP.length;
}

console.log("3141592", "271"); // 2
console.log("500220839878", "7"); // 8