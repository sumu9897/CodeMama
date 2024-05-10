// Problem Statement
// Given a positive integer n, write a program that returns the minimum number of steps to reach 1 by performing one of the following operations: Subtract 1 from it. If it is divisible by 2, divide it by 2. If it is divisible by 3, divide it by 3. For example- from 5 , subtracting 1 it will be 4, then it will be divided by 2 and become 2 then again it will be divided by 2 and become 1. Total 3 steps will be needed.

// Input
// The program will take an integer 
// 𝑁
// N as input.

// Output
// The output will print the number of steps to become 1.

// Constraints
// 0 ≤ |N| ≤ 1000
// Example:
// Enter number
//Input:
//5
//Output:
//3



function minStepsToOne(n, memo = {}) {
    if (n === 1) return 0;
    if (memo[n] !== undefined) return memo[n];

    let steps = 1 + minStepsToOne(n - 1, memo);
    if (n % 2 === 0) steps = Math.min(steps, 1 + minStepsToOne(n / 2, memo));
    if (n % 3 === 0) steps = Math.min(steps, 1 + minStepsToOne(n / 3, memo));

    memo[n] = steps;
    return steps;
}

function main(input) {
    const N = parseInt(input.trim());
    console.log(minStepsToOne(N));
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});