const solution = require('../14888-연산자 끼워넣기');

describe('연산자 끼워넣기', () => {
    const testCases = [
        {
            input: '2\n5 6\n0 0 1 0',
            expected: '30\n30'
        },
        {
            input: '3\n3 4 5\n1 0 1 0',
            expected: '35\n17'
        },
        {
            input: '6\n1 2 3 4 5 6\n2 1 1 1',
            expected: '54\n-24'
        }
    ];

    testCases.forEach(({ input, expected }, index) => {
        test(`테스트 케이스 ${index + 1}`, () => {
            const result = solution(input);
            expect(result).toBe(expected);
        });
    });
});