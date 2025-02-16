// Lv.2 캐시
// https://school.programmers.co.kr/learn/courses/30/lessons/17680#

function solution(cacheSize, cities) {
    cities = cities.map(city => city.toLowerCase());
    if (cacheSize === 0) return cities.length * 5;

    let executionTime = 0;
    let cache = [];

    for (let i = 0; i < cities.length; i++) {
        if (cache.includes(cities[i])) { // 캐시에 있는 경우
            cache.splice(cache.indexOf(cities[i]), 1);
            cache.push(cities[i]);
            executionTime += 1;
        } else { // 캐시에 없는 경우
            if (cache.length === cacheSize) { // 캐시가 다 찬 경우에 삭제
                cache.shift();
            }
            cache.push(cities[i]);
            executionTime += 5;
        }
    }

    return executionTime;
}

module.exports = solution;