// Problem Statement
// Write a program that finds the maximum of three numbers entered by the user.

// Input
// The input consists of 3 integers.

// Output
// Output the maximum

// Constraints
// -2 31 ≤ |S| ≤ 231 - 1
// Example:
// Enter three numbers

// Input:
// 10 20 30
// Output:
// 3



function main (input) {
    /**
     * Write JavaScript code from here
     */

    const numbers = input.trim().split(' ').map(Number);
    const maximum = Math.max(...numbers);
    console.log(maximum);
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});