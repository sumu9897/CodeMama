// Problem Statement
// Write a program to calculate the bonus of salary where bonus is the 10% of main salary. Although input is double type number, output will be an integer number.

// Input
// The input consists of a double type number.

// Output
// Output is the bonus of the salary which will be an integer number.

// Constraints
// 0 ≤ |S| ≤ 231 - 1
// Example-1:
// Enter Salary

// Input:
// 5000
// Output:
// 500


function main (input) {
    /**
     * Write JavaScript code from here
     */
    const salary = parseFloat(input.trim());
    const bonus = Math.floor(salary * 0.10);

     console.log(bonus);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});