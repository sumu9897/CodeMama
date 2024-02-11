function main (input) {
    /**
     * Write JavaScript code from here
     */
    const [base, height] =input.trim().split(' ').map(Number);

    if (isNaN(base) || isNaN(height)){
        console.log("Invalid input");

    }else{
        const area =(base * height)/2;
        console.log(`${Math.floor(area)}`)
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});