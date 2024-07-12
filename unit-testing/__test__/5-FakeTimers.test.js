const { default: expect } = require('expect');

const API = require('../src/API');
const api = new API();

// this is going to fail after 5 secs

test('fail after 1 minute', async () => {
    //test code
    const res = await api.fetchProductsAfter20sec();
    expect(res).toBeInstanceOf(Array);  // this will fail

})


test('fail after 1 minute', async () => {
    //test code

    jest.useFakeTimers();  // fake timer

    const promise = api.fetchProductsAfter20sec();

    jest.advanceTimersByTime(20000);  // 20 sec

    const res = await promise;
    console.log(res)

    expect(res).toBeInstanceOf(Array);  // this will fail

})