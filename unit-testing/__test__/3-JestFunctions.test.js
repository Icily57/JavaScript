//Jest functions -  are used to mock to create a fake implementation of our dependencies.

// benefits of jest.fn() -
// 1. we can check if the function is called
// 2. we can check how many times the function is called
// 3. we can check what the function returns

// write a test to check if jest function is called 3 times and it returns 1

// const jestFn = jest.fn(() => {
//     console.log("jest fn exec")
//     return 1;
// })

// test('jest.fn() should return 1 and executed 3 times', () => {

//     jestFn();
//     jestFn();
//     const result = jestFn();
//     console.log(result)

//     //assertions
//     expect(result).toBe(1);
//     expect(jestFn).toHaveBeenCalledTimes(3);

// })

//jest functions with arguments
//lets check is jest function is called with arguments

const jestFnWithArgs = jest.fn((a, b) => {
    console.log("jest fn exec")
    return a + b;
})

test('jest.fn() should return 3 and executed 3 times', () => {

    const result1 = jestFnWithArgs(1, 2);
    const result2 = jestFnWithArgs(2, 3);
    const result3 = jestFnWithArgs(3, 4);

    //assertions
    expect(result1).toBe(3);  //output of the the function
    expect(result2).toBe(5);
    expect(result3).toBe(7);
    expect(jestFnWithArgs).toHaveBeenCalledTimes(3);  //no of calls

    //toHaveBeenCalledWith
    expect(jestFnWithArgs).toHaveBeenCalledWith(1, 4);  //input arguments of the function
})
