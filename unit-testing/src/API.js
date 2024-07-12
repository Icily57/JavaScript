class API {
    /**
     * Resolve with users after 100ms
     * @returns Promise of an array of users
     */

    fetchUsers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { name: 'John', age: 25 },
                    { name: 'Jane', age: 24 },
                    { name: 'Jim', age: 30 },
                    { name: 'Jill', age: 28 },
                ])
            }, 1000)
        })
    }

    /**
     * Resolve with users after 100ms
     * @returns Promise of an array of products
     */

    fetchProducts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { title: "Nice shirt", color: "black", price: 25 },
                    { name: "Shoes", color: "yellow", price: 24 },
                    { name: "T-shirt", color: "green", price: 23 },
                ]);
            }, 2000);
        });
    }

    fetchProductsAfter20sec() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { title: "Nice shirt", color: "black", price: 25 },
                    { name: "Shoes", color: "yellow", price: 24 },
                    { name: "T-shirt", color: "green", price: 23 },
                ]);
            }, 20000);
        });
    }
}

module.exports = API;