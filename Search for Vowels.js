function main (input) {
    /**
     * Write JavaScript code from here
     */
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let foundVowel = false;

    for (let i = 0; i < input.length; i++) {
        if (vowels.has(input[i])) {
            foundVowel = true;
            break;
        }
    }
    
    if (foundVowel) {
        console.log("The string contains a vowel.");
    } else {
        console.log("The string does not contain any vowel.");
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});