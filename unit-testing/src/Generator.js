

const getRandomNumber = require('./getRandomNumber');


class Generator {

    /** Generate an array of random numbers
     * @param {Number} argument The number of random numbers to generate
     * @returns {Array} An array of random numbers
     */

    generateRandomNumbers(argument) {
        if (!Number.isInteger(argument) || argument < 1) throw new Error('Argument must be an integer')

            const randomNumbers = [];

            for(let i = 0; i< argument; i++){
                randomNumbers.push(getRandomNumber());
            }   
            return randomNumbers;
    }

}

module.exports = Generator;