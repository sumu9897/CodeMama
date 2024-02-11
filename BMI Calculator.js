function main (input) {
    /**
     * Write JavaScript code from here
     */

    const lines = input.split('\n');
    const [height, weight] = lines[0].split(' ').map(Number);
    
    const bmi = weight / (height * height);
    console.log(`BMI: ${bmi.toFixed(2)}`);
    
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi >= 18.5 && bmi < 25.0) {
        console.log("Normal weight");
    } else if (bmi >= 25.0 && bmi < 30.0) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});