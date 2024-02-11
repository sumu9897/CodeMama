function main (input) {
    /**
     * Write JavaScript code from here
     */

    const numbers = input.trim().split(' ').map(Number);

    const num1 = numbers[0];
    const num2 = numbers[1];

    const quotient = Math.floor(num1 / num2);
    console.log(quotient);
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});