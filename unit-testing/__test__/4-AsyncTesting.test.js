const { default: expect } = require('expect');

const API = require('../src/API');
const api = new API();



// Promise

//es6 - async / await

test("fetch users should return an array of users", async () => {
    //test code 

    const res = await api.fetchUsers();
    console.log(res)

    // expect(res).toBeInstanceOf(Array);
    expect(res).toEqual([
        { name: 'John', age: 25 },
        { name: 'Jane', age: 24 },
        { name: 'Jim', age: 30 },
        { name: 'Jill', age: 28 },
    ]);

})

//.then().catch()

test("fetch products should return an array of products", () => {
    return api.fetchProducts()
        .then((products) => {
            console.log(products)
            expect(products).toBeInstanceOf(Array)
        }).catch((err) => {
            console.log(err)
        })
})