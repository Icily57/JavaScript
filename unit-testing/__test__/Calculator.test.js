const Calculator = require("../src/Calculator");


test('Calculator can add two numbers', () => {
    const calc = new Calculator();
    // const results = calc.add(2, 3);  // 2 + 3 = 5
    // console.log(results);

    expect(calc.add(2, 3)).toBe(5);
}); 

test('multiply 2 * 3 to equal 6', () => {
    const calc = new Calculator();
    // const results = calc.add(2, 3);  // 2 + 3 = 5
    // console.log(results);

    expect(calc.multiply(2, 3)).toBe(4);
}); 