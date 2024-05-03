function main(input) {

    const isOperator = (char) => {
        return char === '+' || char === '-' || char === '*' || char === '/';
    };


    const precedence = (operator) => {
        switch (operator) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            default:
                return 0;
        }
    };

    let output = '';
    const stack = [];


    for (let i = 0; i < input.length; i++) {
        let char = input[i];


        if (/[0-9]/.test(char)) {
            output += char;
        }

        else if (char === '(') {
            stack.push(char);
        }

        else if (char === ')') {
           
            while (stack.length && stack[stack.length - 1] !== '(') {
                output += stack.pop();
            }

            stack.pop();
        }

        else if (isOperator(char)) {
            
            while (stack.length && precedence(stack[stack.length - 1]) >= precedence(char)) {
                output += stack.pop();
            }

            stack.push(char);
        }
    }

    while (stack.length) {
        output += stack.pop();
    }

    console.log(output);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
