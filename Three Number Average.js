// Problem Statement
// Write a program that finds the average of three numbers entered by the user.

// Input
// The input consists of 3 float.

// Output
// Output will be a float number.

// Constraints
// 1.2E-38 ≤ |S| ≤ 3.4E+38
// The program should print the number with exactly two decimal points.
// Example:
// Enter three numbers

// Input:
// 10 20 30
// Output:
// Average: 20.00



function main (input) {
    /**
     * Write JavaScript code from here
     */
    const numbers = input.trim().split(' ').map(Number);
    
    const average = (numbers.reduce((sum, num) => sum + num, 0) / numbers.length).toFixed(2);

    console.log(`Average: ${average}`);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});