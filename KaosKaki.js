function countPair(socks) {
    let sockNum = {};
    let pairs = 0;

    for (let sock of socks) {
        sockNum[sock] = (sockNum[sock] || 0) + 1;
        if (sockNum[sock] % 2 === 0) {
            pairs++;
        }
    }
    return pairs;
}

const testCases = [
    { input: [10, 20, 20, 10, 10, 30, 50, 10, 20], expected: 3 },
    { input: [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5], expected: 6 },
    { input: [1, 1, 3, 1, 2, 1, 3, 3, 3, 3], expected: 4 },
    { input: [1, 1, 3, 1], expected: 1 }
];

testCases.forEach(({ input, expected }, index) => {
    const result = countPair(input);
    console.log(`Test Case ${index + 1}: ${result} (Expected: ${expected})`);
});
