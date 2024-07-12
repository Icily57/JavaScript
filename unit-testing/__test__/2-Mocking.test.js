// Mocking - used to mock to create a fake implementation of our dependencies
// we can use jest.mock() to create a mock function

//generateRandomNumbers should return an array of repeated numbers
const Generator = require('../src/Generator');

test("generateRandomNumbers should return an array of repeated numbers", () => {
    // test code

    //expect result = [1,1,1]

    const generate = new Generator();
    const result = generate.generateRandomNumbers(3); // 3 times getRandomNumber() = [1,1,1]
    console.log(result);
    expect(result).toEqual([1,1,1]);
})