const { default: expect } = require('expect')

const getRandomNumber = () => Math.floor(Math.random() * 100)

//toBe - Strict equality (===)

// test("expect(value).toBe(number)", () => {
//     console.log(getRandomNumber())
//     expect( typeof getRandomNumber()).toBe('number')
// })
// test("expect(getRandomNumber()).toBeGreaterThan(0)", () => {
//     console.log(getRandomNumber())
//     expect(getRandomNumber()).toBeGreaterThan(10);
// })
// test('expect(getRandomNumber()).toBeLessThanOrEqual(100)', () => {
//     //test code
//     expect(getRandomNumber()).toBeLessThanOrEqual(100);  //   pass 
// })
// test('expect(getRandomNumber()).toBeGreaterThanOrEqual(0)', () => {
//     //test code
//     expect(getRandomNumber()).toBeGreaterThanOrEqual(0);  // pass   
// })
// test('expect(-1).toBeLessThanOrEqual(0)', () => {
//     //test code
//     expect(-1).toBeLessThanOrEqual(getRandomNumber());  // pass   
// })

// toEqual - used to compare different objects for equality

// test('expect(value).toEqual(value)', () => {
//     //test code

//     const object1 = { name: 'John', age: 21, location : "kutus" };
//     const object2 = { name: 'John', age: 21 };

//     expect(object1).toEqual(object2);  // pass
// })

//toThrow - used to check if a function throws an error

test('expect(function).toThrow()', () => {
    //test code

    const throwError =() => {
        throw new Error("hello world");
    }

    expect(throwError).toThrow();  // pass
    expect(throwError).toThrow("kevin");  // fail  
})