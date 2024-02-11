function main(input) {
    const numbers = input.trim().split(' ').map(Number);
    const nextNumber = numbers[2] + (numbers[1] - numbers[0]);
    console.log(nextNumber);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input);
});
