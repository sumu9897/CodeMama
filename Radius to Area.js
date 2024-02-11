function main (input) {
    /**
     * Write JavaScript code from here
     */

    const radius = parseFloat(input);

    if (isNaN(radius)){
        console.log("Invalid input.");
    }else{
        const area = 3.14 * Math.pow(radius, 2);

        console.log(`The area of the circle is ${area.toFixed(2)} square units.`)
    }
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});